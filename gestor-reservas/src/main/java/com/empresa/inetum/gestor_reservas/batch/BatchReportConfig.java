package com.empresa.inetum.gestor_reservas.batch;

import com.openhtmltopdf.pdfboxout.PdfRendererBuilder;
import com.empresa.inetum.gestor_reservas.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import jakarta.mail.internet.MimeMessage;
import java.io.ByteArrayOutputStream;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@Component
public class BatchReportConfig {

    @Autowired private ReportService reportService;
    @Autowired private JavaMailSender mailSender;
    @Autowired private TemplateEngine templateEngine;

    @Scheduled(cron = "0 0 12 * * *", zone = "Europe/Madrid")
    public void generateAndSendReport() throws Exception {
        // 1) Cálculo de métricas
        Map<String, Object> metrics = new HashMap<>();
        metrics.put("altas", reportService.countAltas());
        metrics.put("bajas", reportService.countBajas());
        metrics.put("ocupacionMed", reportService.ocupacionMedia());
        metrics.put("libres", reportService.habitacionesLibres());
        metrics.put("medicos", reportService.countMedicos());

        // Fechas para la plantilla
        LocalDate today = LocalDate.now();
        metrics.put("fechaInforme", today.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        metrics.put("anio", today.getYear());

        // 2) Procesar plantilla Thymeleaf a HTML
        Context ctx = new Context();
        ctx.setVariables(metrics);
        String html = templateEngine.process("report.html", ctx);

        // 3) Convertir HTML a PDF
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfRendererBuilder builder = new PdfRendererBuilder();
        builder.withHtmlContent(html, null);
        builder.toStream(baos);
        builder.run();
        byte[] pdf = baos.toByteArray();

        // 4) Enviar email con adjunto
        MimeMessage msg = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(msg, true);
        helper.setFrom("tu.email@gmail.com");
        helper.setTo("tu.email@gmail.com");
        helper.setSubject("informe general");
        helper.setText("Adjunto tienes el informe diario.", false);
        helper.addAttachment("informe_general.pdf", new ByteArrayResource(pdf));
        mailSender.send(msg);
    }
}