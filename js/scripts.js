window.addEventListener('DOMContentLoaded', () => {
  
    const tabs = document.querySelectorAll('.tab-header__item'),
          tabsContent = document.querySelectorAll('.tab__content'),
          tabsPerent = document.querySelector('.tab-header__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tab-header__item_active');
        });
    }
    
    function showtabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tab-header__item_active');
    }

    hideTabContent();
    showtabContent();

    tabsPerent.addEventListener('click', function(event) {
        const target = event.target;

        if (target && target.classList.contains('tab-header__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showtabContent(i);
                }
            });
        }
    });
});
