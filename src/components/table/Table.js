import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
    static className='excel__table'
    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }


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
    // onClick() {
    //     console.log('click')
    // }
    onMousedown(event) {
         // console.log('mousedown', event.target.getAttribute('data-resize'))
        if (shouldResize(event)) {
            resizeHandler(this.$root, event)
        }
    }
}
