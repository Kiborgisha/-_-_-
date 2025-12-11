document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('feedbackModal');
    const btn = document.querySelector('.feedback-btn');
    const close = document.querySelector('.feedback-close');

    btn.onclick = function() {
        modal.classList.add('active');
    }

    close.onclick = function() {
        modal.classList.remove('active');
    }

    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    }

});
document.addEventListener('DOMContentLoaded', function() {
    const subjectSelect = document.getElementById('subject');
    const otherFieldContainer = document.getElementById('other-field-container');
    subjectSelect.addEventListener('change', function() {
        if (this.value === 'other') {
            otherFieldContainer.style.display = 'block';
        } else {
            otherFieldContainer.style.display = 'none';
            document.getElementById('other-details').value = '';
        }
    });
});
// Данные новостей (можно хранить в JS или подгружать с сервера)
const newsData = {
    1: {
        date: "10 декабря 2025",
        title: "Новый сервис: удалённая диагностика домофонов",
        content: "<p>Теперь мы можем проверить работоспособность вашей системы без выезда — быстро и бесплатно. Достаточно подключиться к нашему специалисту через Zoom или Telegram.</p><p>Услуга доступна для всех клиентов, заключивших договор после 2020 года.</p>"
    },
    2: {
        date: "5 декабря 2025",
        title: "Скидка 15% на установку видеонаблюдения",
        content: "<p>До конца месяца действуют специальные цены на комплекты для дома и офиса. В стоимость входит оборудование, монтаж и настройка.</p><p>Акция распространяется на системы с 4 и более камерами.</p>"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('newsModal');
    const modalContent = document.getElementById('modalNewsContent');
    const closeBtn = modal.querySelector('.modal-close');

    document.querySelectorAll('.news-read-btn').forEach(button => {
        button.addEventListener('click', function() {
            const newsId = this.closest('.news-card').dataset.news;
            const news = newsData[newsId];

            if (news) {
                modalContent.innerHTML = `
                    <div class="modal-news-date">${news.date}</div>
                    <h2 class="modal-news-title">${news.title}</h2>
                    <div class="modal-news-text">${news.content}</div>
                `;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    closeBtn.onclick = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
});