import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { ServiceEquipos } from '../../services/service.equipos';

@Component({
  selector: 'app-equipo-component',
  standalone: false,
  styleUrl: './equipo-component.css',
  templateUrl: './equipo-component.html',
})
export class EquipoComponent implements OnInit {

  public equipos!: Array<Equipo>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEquipos
  ) { }

  async ngOnInit(): Promise<void> {
    this.equipos = await this._service.getEquiposAsync();
    this._cdr.detectChanges();

  }
}
