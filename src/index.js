export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 🔗 Карта редиректов (пока пустая, заполним после проверки Ozon)
    const redirectMap = new Map([
      // ["/go/watch", "ССЫЛКА_НА_OZON"],
    ]);

    if (redirectMap.has(path)) {
      return Response.redirect(redirectMap.get(path), 302);
    }

    if (path === "/" || path === "") {
      return new Response(getHomePage(), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    if (path === "/articles/braslety") return new Response(getArticleBraslety(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    if (path === "/articles/naushniki") return new Response(getArticleNaushniki(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    if (path === "/articles/chasy") return new Response(getArticleChasy(), { headers: { "Content-Type": "text/html; charset=utf-8" } });

    return new Response("Not Found", { status: 404 });
  },
};

// --- СТИЛИ ---
const commonStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body { 
        font-family: 'Inter', sans-serif; 
        background: #0f172a; 
        background-image: radial-gradient(circle at 15% 50%, rgba(109, 170, 69, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(59, 130, 246, 0.15), transparent 25%);
        color: #e2e8f0; 
        line-height: 1.6; 
        min-height: 100vh;
    }
    
    .container { max-width: 1000px; margin: 0 auto; padding: 60px 20px; }
    
    /* Главная */
    .hero { text-align: center; padding: 40px 0 60px; }
    .hero h1 { font-size: 48px; font-weight: 800; color: #fff; margin-bottom: 20px; letter-spacing: -1px; }
    .hero p { font-size: 20px; color: #94a3b8; max-width: 600px; margin: 0 auto 40px; }
    
    /* Сетка карточек */
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
    
    /* Карточка */
    .card {
        background: rgba(30, 41, 59, 0.7);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 30px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px -10px rgba(109, 170, 69, 0.2);
        border-color: rgba(109, 170, 69, 0.4);
    }
    
    .card-icon { font-size: 64px; margin-bottom: 20px; }
    .card h3 { font-size: 22px; color: #fff; margin-bottom: 10px; }
    .card p { font-size: 15px; color: #94a3b8; margin-bottom: 20px; }
    
    /* Кнопки */
    .btn {
        display: inline-block;
        padding: 12px 28px;
        background: #6daa45;
        color: #fff;
        text-decoration: none;
        border-radius: 10px;
        font-weight: 600;
        transition: background 0.2s, transform 0.2s;
        margin-top: auto;
        border: none;
        cursor: pointer;
    }
    .btn:hover { background: #588a37; transform: scale(1.02); }
    
    /* Статьи */
    .article-header { margin-bottom: 40px; }
    .article-header h1 { font-size: 36px; color: #fff; margin-bottom: 15px; }
    .back-link { display: inline-flex; align-items: center; color: #94a3b8; text-decoration: none; margin-bottom: 30px; font-weight: 500; }
    .back-link:hover { color: #fff; }
    
    .content-block {
        background: rgba(30, 41, 59, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 30px;
        margin-bottom: 24px;
    }
    .content-block h2 { color: #6daa45; font-size: 24px; margin-bottom: 15px; }
    .content-block ul { padding-left: 20px; color: #cbd5e1; }
    .content-block li { margin-bottom: 10px; }
    .content-block strong { color: #fff; }
    
    .cta-box { text-align: center; margin-top: 40px; padding: 40px; background: rgba(109, 170, 69, 0.1); border-radius: 16px; border: 1px dashed #6daa45; }
    .cta-box h2 { color: #fff; margin-bottom: 15px; }
    .cta-box p { color: #cbd5e1; margin-bottom: 25px; }
`;

function getHomePage() {
  return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Находки на Ozon — смарт-часы, браслеты, наушники</title>
    <meta name="description" content="Проверенные гаджеты с Ozon. Сравнения, обзоры и лучшие цены.">
    <style>${commonStyles}</style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>Находки на Ozon</h1>
            <p>Смарт-часы, фитнес-браслеты и наушники, которые стоят своих денег. Проверяю, сравниваю, рекомендую.</p>
        </div>
        
        <div class="grid">
            <a href="/articles/braslety" class="card">
                <div class="card-icon">🏃</div>
                <h3>Фитнес-браслеты</h3>
                <p>Лучшие модели до 3000 ₽ с точным пульсометром.</p>
                <span class="btn">Смотреть гид</span>
            </a>
            <a href="/articles/naushniki" class="card">
                <div class="card-icon">🎧</div>
                <h3>Наушники</h3>
                <p>Для бега, спорта и повседневной носки без проводов.</p>
                <span class="btn">Смотреть гид</span>
            </a>
            <a href="/articles/chasy" class="card">
                <div class="card-icon">⌚</div>
                <h3>Смарт-часы</h3>
                <p>Модели с большим экраном и долгой автономностью.</p>
                <span class="btn">Смотреть гид</span>
            </a>
        </div>
    </div>
</body>
</html>`;
}

function getArticleBraslety() {
  return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Лучшие фитнес-браслеты до 3000 рублей — Находки на Ozon</title>
    <meta name="description" content="Обзор лучших бюджетных фитнес-браслетов. Какой выбрать и почему.">
    <style>${commonStyles}</style>
</head>
<body>
    <div class="container">
        <a href="/" class="back-link">← На главную</a>
        <div class="article-header">
            <h1>Лучшие фитнес-браслеты до 3000 рублей</h1>
            <p style="color: #94a3b8; font-size: 18px;">Фитнес-браслет — это недорогой способ следить за здоровьем. Но в бюджете легко нарваться на модель с неточным пульсометром.</p>
        </div>
        
        <div class="content-block">
            <h2>На что смотреть при выборе</h2>
            <ul>
                <li><strong>Датчик пульса:</strong> должен быть оптическим, а не «виртуальным».</li>
                <li><strong>Экран:</strong> AMOLED ярче и экономичнее, чем TFT.</li>
                <li><strong>Автономность:</strong> хороший браслет держит заряд 7–14 дней.</li>
                <li><strong>Влагозащита:</strong> минимум IP67, лучше 5ATM.</li>
            </ul>
        </div>

        <div class="cta-box">
            <h2>Топ-3 модели скоро появятся</h2>
            <p>Как только Ozon одобрит площадку, здесь появятся прямые ссылки на лучшие модели.</p>
            <span class="btn" style="background: #333; border: 1px solid #555; cursor: not-allowed;">Ссылки появятся скоро</span>
        </div>
    </div>
</body>
</html>`;
}

function getArticleNaushniki() {
  return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Наушники для бега: что выбрать — Находки на Ozon</title>
    <meta name="description" content="Как выбрать наушники для спорта, чтобы они не выпадали и не боялись пота.">
    <style>${commonStyles}</style>
</head>
<body>
    <div class="container">
        <a href="/" class="back-link">← На главную</a>
        <div class="article-header">
            <h1>Наушники для бега: что выбрать</h1>
            <p style="color: #94a3b8; font-size: 18px;">Главная проблема спортивных наушников — они выпадают или портятся от пота. Вот ключевые критерии.</p>
        </div>
        
        <div class="content-block">
            <h2>Форм-фактор</h2>
            <p style="color: #cbd5e1; margin-bottom: 15px;">Для бега лучше всего подходят накладные (с заушным креплением) или TWS-вкладыши с силиконовыми амбушюрами.</p>

            <h2>Влагозащита</h2>
            <p style="color: #cbd5e1; margin-bottom: 15px;">Ищите стандарт IPX4 или выше. Это защита от брызг и пота.</p>
            
            <h2>Автономность</h2>
            <p style="color: #cbd5e1;">Для долгих тренировок нужно минимум 5–6 часов работы от одного заряда.</p>
        </div>

        <div class="cta-box">
            <h2>Рекомендации скоро появятся</h2>
            <p>Как только площадка будет проверена, здесь будут прямые ссылки на Ozon.</p>
            <span class="btn" style="background: #333; border: 1px solid #555; cursor: not-allowed;">Ссылки появятся скоро</span>
        </div>
    </div>
</body>
</html>`;
}

function getArticleChasy() {
  return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Смарт-часы с большим экраном для мужчин — Находки на Ozon</title>
    <meta name="description" content="Обзор смарт-часов с крупным дисплеем для мужчин.">
    <style>${commonStyles}</style>
</head>
<body>
    <div class="container">
        <a href="/" class="back-link">← На главную</a>
        <div class="article-header">
            <h1>Смарт-часы с большим экраном</h1>
            <p style="color: #94a3b8; font-size: 18px;">Большой экран — это не только стиль, но и удобство чтения уведомлений и управления.</p>
        </div>
        
        <div class="content-block">
            <h2>Размер и разрешение</h2>
            <p style="color: #cbd5e1; margin-bottom: 15px;">Оптимальный размер дисплея — от 1.6 до 1.9 дюйма. Разрешение должно быть не ниже 320x380.</p>

            <h2>Яркость</h2>
            <p style="color: #cbd5e1; margin-bottom: 15px;">Для чтения на улице яркость должна быть 500+ нит.</p>
            
            <h2>Материалы</h2>
            <p style="color: #cbd5e1;">Обращайте внимание на корпус: пластик легче, но металл выглядит дороже и прочнее.</p>
        </div>

        <div class="cta-box">
            <h2>Топ моделей скоро здесь</h2>
            <p>Мы готовим подборку лучших вариантов с Ozon. Ссылки появятся после проверки площадки.</p>
            <span class="btn" style="background: #333; border: 1px solid #555; cursor: not-allowed;">Ссылки появятся скоро</span>
        </div>
    </div>
</body>
</html>`;
}