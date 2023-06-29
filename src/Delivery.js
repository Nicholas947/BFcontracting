const designBidBtn = document.getElementById('designBidBtn');
const designBidCloseBtn = document.getElementById('designBidCloseBtn');
const popup = document.querySelector('.popup')

function showDesignCard(){
    document.getElementById('popupDesign').style.display = 'block'
    document.getElementById('popupDesign').style.transition = 'all 4s'
}
    

function closeDesignCard(){
    document.getElementById('popupDesign').style.display = 'none'
}
    
function showJOC(){
    document.getElementById('popupJOC').style.display = 'block'
    document.getElementById('popupDesign').style.transition = 'all 4s'
}
    

function closeJOC(){
    document.getElementById('popupJOC').style.display = 'none'
}
    
function showCMAR(){
    document.getElementById('popupCMAR').style.display = 'block'
    document.getElementById('popupDesign').style.transition = 'all 4s'
}
    

function closeCMAR(){
    document.getElementById('popupCMAR').style.display = 'none'
}
    
function showHardBids(){
    document.getElementById('popupHardBids').style.display = 'block'
    document.getElementById('popupDesign').style.transition = 'all 4s'
}
    

function closeHardBids(){
    document.getElementById('popupHardBids').style.display = 'none'
}

function showERW(){
    document.getElementById('popupERW').style.display = 'block'
    document.getElementById('popupDesign').style.transition = 'all 4s'
}
    

function closeERW(){
    document.getElementById('popupERW').style.display = 'none'
}
    
