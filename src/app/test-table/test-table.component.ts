import { Component, OnInit, ViewChild } from '@angular/core';
import { HammerInput } from '@angular/material/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen Hydrogen Hydrogen Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})
export class TestTableComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  positionWidth = 50;
  nameWidth = 250;
  weightWidth = 250;
  symbolWidth = 150;

  positionMinWidth = 30;
  nameMinWidth = 30;
  weightMinWidth = 30;
  symbolMinWidth = 30;

  recordPositionWidth: number;
  recordNameWidth: number;
  recordWeightWidth: number;
  recordSymbolWidth: number;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  panstart(event: HammerInput) {
    this.recordPositionWidth = this.positionWidth; // 80
  }

  panmove(event: HammerInput) {
    const deltaX = event.deltaX;
    const panDirection = deltaX > 0 ? 'panRight' : 'panLeft';
    const panLeftMaximum = this.recordPositionWidth - this.positionMinWidth; // 50 - 30 = 20

    if (panDirection === 'panRight') {
      this.positionWidth = deltaX + this.recordPositionWidth;
    }
    else {
      if (Math.abs(deltaX) > panLeftMaximum) {
        // no resizing
      }
      else {
        this.positionWidth = deltaX + this.recordPositionWidth;
      }
    }
  }

  panend(elem: HTMLElement) {
  }



  panstart1(event: HammerInput) {
    this.recordNameWidth = this.nameWidth; // 80
  }

  panmove1(event: HammerInput) {
    const deltaX = event.deltaX;
    const panDirection = deltaX > 0 ? 'panRight' : 'panLeft';
    const panLeftMaximum = this.recordNameWidth - this.nameMinWidth; // 250 - 30 = 220
    console.log('deltaX', deltaX);
    console.log('panLeftMaximum', panLeftMaximum);

    if (panDirection === 'panRight') {
      this.nameWidth = deltaX + this.recordNameWidth;
    }
    else {
      if (Math.abs(deltaX) > panLeftMaximum) {
        // no resizing
      }
      else {
        this.nameWidth = deltaX + this.recordNameWidth;
      }
    }
  }


  panstart2(event: HammerInput) {
    this.recordWeightWidth = this.weightWidth; // 80
  }

  panmove2(event: HammerInput) {
    const deltaX = event.deltaX;
    const panDirection = deltaX > 0 ? 'panRight' : 'panLeft';
    const panLeftMaximum = this.recordWeightWidth - this.weightMinWidth; // 50 - 30 = 20

    if (panDirection === 'panRight') {
      this.weightWidth = deltaX + this.recordWeightWidth;
    }
    else {
      if (Math.abs(deltaX) > panLeftMaximum) {
        // no resizing
      }
      else {
        this.weightWidth = deltaX + this.recordWeightWidth;
      }
    }
  }

  panstart3(event: HammerInput) {
    this.recordSymbolWidth = this.symbolWidth; // 80
  }

  panmove3(event: HammerInput) {
    const deltaX = event.deltaX;
    const panDirection = deltaX > 0 ? 'panRight' : 'panLeft';
    const panLeftMaximum = this.recordSymbolWidth - this.symbolMinWidth; // 50 - 30 = 20

    if (panDirection === 'panRight') {
      this.symbolWidth = deltaX + this.recordSymbolWidth;
    }
    else {
      if (Math.abs(deltaX) > panLeftMaximum) {
        // no resizing
      }
      else {
        this.symbolWidth = deltaX + this.recordSymbolWidth;
      }
    }
  }


}
