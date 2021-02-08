import {$} from '@core/dom';

export function resizeHandler($root, event) {
    const $resizer=$(event.target)
    const $parent=$resizer.closest('[data-type="resizable"]')
    const coords=$parent.getCoords()
    // console.log('start resizing ', event.target.dataset.resize)
    // console.log($parent.data, coords )
    const type=$resizer.data.resize
    const sideProp=type==='col'? 'bottom' :'right'
    $resizer.css({opacity: 1,
        [sideProp]: '-5000px'
    })

    const cells=$root.findAll(`[data-col="${$parent.data.col}"]`)
    let value
    document.onmousemove=e => {
        // debugger
        if (type === 'col') {
            const delta = e.pageX - coords.right
            value = coords.width + delta
            $resizer.css({right: -delta+'px'})
            // $parent.$el.style.width = value + 'px'
        } else if (type === 'row') {
            const delta = e.pageY - coords.bottom
            value = coords.height + delta
            $resizer.css({bottom: -delta+'px'})
            // $parent.$el.style.height= value + 'px'
        }
    }
    document.onmouseup=()=>{
        document.onmousemove=null
        document.onmouseup=null

        if (type==='col') {
            $parent.css({width: value + 'px'})
            cells.forEach(el=>el.style.width=value+'px')
        } else {
            $parent.css({
                height: value + 'px'
            })
        }

        $resizer.css({opacity: 0,
            bottom: 0,
            right: 0
        })
    }
}
