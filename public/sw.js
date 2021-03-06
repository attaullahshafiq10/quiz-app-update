// console.log("registered");

let cacheData = "quizAppv1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        // "/",
        // "index.html",
        // "/manifest.json",
        // "/favicon.ico",
        // "/logo192.png",
        // "/images/computer.png",
        // "/images/generalknowledge.png",
        // "/images/geography.png",
        // "/images/history.png",
        // "/images/music.png",
        // "/images/science.png",
        // "https://fonts.googleapis.com/icon?family=Material+Icons",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=9&difficulty=easy",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=9&difficulty=medium",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=9&difficulty=hard",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=12&difficulty=easy",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=12&difficulty=medium",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=12&difficulty=hard",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=17&difficulty=easy",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=17&difficulty=medium",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=17&difficulty=hard",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=18&difficulty=easy",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=18&difficulty=medium",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=18&difficulty=hard",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=22&difficulty=easy",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=22&difficulty=medium",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=22&difficulty=hard",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=23&difficulty=easy",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=23&difficulty=medium",
        // "https://opentdb.com/api.php?amount=10&type=multiple&category=23&difficulty=hard",
        // "/static/js/2.953c1251.chunk.js",
        // "/static/js/main.1e1311be.chunk.js",
      ]);
    })
  );
});

this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(cacheData).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
