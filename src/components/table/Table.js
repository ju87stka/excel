import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
    static className='excel__table'

    toHTML() {
      return createTable()
        // `
      //  <div class="row">
      //       <div class="row-info">0</div>
      //
      //       <div class="row-data">
      //           <div class="column">А</div>
      //           <div class="column">B</div>
      //           <div class="column">C</div>
      //
      //       </div>
      //   </div>
      //
      //   <div class="row">
      //       <div class="row-info">1</div>
      //
      //       <div class="row-data">
      //           <div class="cell selected" contenteditable>А1</div>
      //           <div class="cell" contenteditable>B2</div>
      //           <div class="cell" contenteditable>C3</div>
      //
      //
      //       </div>
      //   </div>
      //   <div class="row">
      //       <div class="row-info">1</div>
      //
      //       <div class="row-data">
      //           <div class="cell selected " contenteditable>А1</div>
      //           <div class="cell" contenteditable>B2</div>
      //           <div class="cell" contenteditable>C3</div>
      //
      //
      //       </div>
      //   </div>
      //
      // `
    }
}
