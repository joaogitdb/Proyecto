package com.empresa.inetum.gestor_reservas.batch;

import com.openhtmltopdf.pdfboxout.PdfRendererBuilder;
import com.empresa.inetum.gestor_reservas.service.ReportService;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.support.SimpleJobLauncher;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.explore.JobExplorer;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import jakarta.mail.internet.MimeMessage;
import java.io.ByteArrayOutputStream;
import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableBatchProcessing
@EnableScheduling
public class BatchReportConfig {

    @Autowired private JobBuilderFactory jobs;
    @Autowired private StepBuilderFactory steps;
    @Autowired private ReportService reportService;
    @Autowired private JavaMailSender mailSender;
    @Autowired private TemplateEngine templateEngine;

    @Bean
    public Job dailyReportJob(Step generateReportStep) {
        return jobs.get("dailyReportJob")
                   .start(generateReportStep)
                   .build();
    }

    @Bean
    public Step generateReportStep() {
        return steps.get("generateReportStep")
            .tasklet((contribution, chunkContext) -> {
                Map<String, Object> metrics = new HashMap<>();
                metrics.put("altas", reportService.countAltas());
                metrics.put("bajas", reportService.countBajas());
                metrics.put("ocupacionMed", reportService.ocupacionMedia());
                metrics.put("libres", reportService.habitacionesLibres());
                metrics.put("medicos", reportService.countMedicos());

                Context ctx = new Context();
                ctx.setVariables(metrics);
                String html = templateEngine.process("report.html", ctx);

                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                PdfRendererBuilder builder = new PdfRendererBuilder();
                builder.withHtmlContent(html, null);
                builder.toStream(baos);
                builder.run();
                byte[] pdf = baos.toByteArray();

                MimeMessage msg = mailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(msg, true);
                helper.setFrom("tu.email@gmail.com");
                helper.setTo("tu.email@gmail.com");
                helper.setSubject("informe general");
                helper.setText("Adjunto tienes el informe diario.", false);
                helper.addAttachment("informe_general.pdf",
                    new ByteArrayResource(pdf));
                mailSender.send(msg);

                return RepeatStatus.FINISHED;
            }).build();
    }

    @Bean
    public JobLauncher jobLauncher(JobRepository repo, JobExplorer explorer) {
        SimpleJobLauncher launcher = new SimpleJobLauncher();
        launcher.setJobRepository(repo);
        return launcher;
    }

    @Scheduled(cron = "${batch.report.cron}", zone = "Europe/Madrid")
    public void scheduleDailyReport(JobLauncher launcher, Job dailyReportJob, Step generateReportStep) throws Exception {
        JobParameters params = new JobParametersBuilder()
            .addLong("ts", System.currentTimeMillis())
            .toJobParameters();
        launcher.run(dailyReportJob, params);
    }
}