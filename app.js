document.addEventListener('DOMContentLoaded', main)


function main() {
    const scrollButtons = document.querySelectorAll('.app-button');
    
    Array.from(scrollButtons).forEach(function(button){
        button.addEventListener('click', onScrollButtonClick)
    })
}

function onScrollButtonClick(event) {
    window.location.href="https://www.amazon.com/gp/product/B08X3VZ1V8?pf_rd_r=QFQE5N93DTJ0H4SV2V42&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=ab5ab76a-c903-4c5a-b5f7-cf1c3e7a2269&pd_rd_w=i3uS1&pd_rd_wg=sByYt&ref_=pd_gw_unk"
}
