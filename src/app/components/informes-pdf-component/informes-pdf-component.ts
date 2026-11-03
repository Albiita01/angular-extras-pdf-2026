import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  styleUrl: './informes-pdf-component.css',
  templateUrl: './informes-pdf-component.html',
})
export class InformesPdfComponent {

  generarDocumento(): void {
    let document: jsPDF = new jsPDF();
    document.setFontSize(18);
    document.text("Mi documento de martes", 10, 10);
    document.setFontSize(12);
    const headers = [["Nombre", "Email", "Edad"]];
    const data = [
      ["Alba", "alba@gmail.com", 25],
      ["Niko", "niko@gmail.com", 22],
      ["Chako", "chako@gmail.com", 25],
      ["Robin", "robin@gmail.com", 9],
      ["Chase", "chase@gmail.com", 9],
    ];
    autoTable(document, {
      head: headers,
      body: data,
      startY: 20
    })
    document.save("personas.pdf");
  }
}
