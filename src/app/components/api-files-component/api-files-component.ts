import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServicePostFiles } from '../../services/service.post.files';
import { FileModel } from '../../models/fileModel';

@Component({
  selector: 'app-api-files-component',
  standalone: false,
  styleUrl: './api-files-component.css',
  templateUrl: './api-files-component.html',
})
export class ApiFilesComponent {

  public urlFile!: string;
  public mensaje!: string;

  @ViewChild("cajafile") cajafile!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicePostFiles
  ) { }

  uploadFile(): void {
    // Por un lado tenemos el fichero del input file
    let file = this.cajafile.nativeElement.files[0];
    // en el value tiene toda la ruta: C:\Documents\Angular...
    let miPath = this.cajafile.nativeElement.value.split("\\");
    // Recuperamos el último valor: 2
    let fileName = miPath[2];
    // Para leer un fichero se utiliza FileReader
    let reader = new FileReader();

    // Necesitamos un método delegado para cuando el reader finalice la lectura
    reader.onloadend = () => {
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      let base64: string;
      // Tenemos una función llamada btoa para convertir bytes a string
      base64 = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      let fileModel = new FileModel(fileName, base64);
      this._service.postFile(fileModel).subscribe((response) => {
        this.mensaje = "Fichero subido correctamente";
        console.log(response);
      })
    }

    // Le indicamos que comience a leer los datos del file
    reader.readAsArrayBuffer(file);
  }
}
