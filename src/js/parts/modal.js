function modal(){
    let more = document.querySelectorAll('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.forEach(function(element){
        element.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow='hidden';
        });
    
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        document.querySelector('.more-splash').classList.remove('more-splash');
        document.body.style.overflow='';
    });
}

module.exports = modal;