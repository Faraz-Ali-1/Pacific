# Pacific E-Commerce

Pacific is a modern, fully functional e-commerce landing page and store. It features a responsive design, dynamic product rendering via a custom JSON API, and a persistent shopping cart system that preserves user data across sessions.

---

![img](https://github.com/Faraz-Ali-1/Pacific/blob/3c7339fae7a9c40f631a05fa920b5658f053a326/screenshots/pacific%201.jpg)

---

## Live Demo
https://faraz-ali-1.github.io/Pacific/

---

## Technical Features

* **Persistent Cart System:** Implemented Local Storage to ensure user selections remain intact even after browser refreshes.
* **Dynamic Product Rendering:** Utilized HTML templates and JavaScript to efficiently inject product data from a JSON-based API.
* **Real-time Price Calculation:** Developed logic to automatically update sub-totals and final pricing when items are incremented or decremented.
* **Responsive UI/UX:** Built a mobile-first design featuring a slide-out navigation menu and custom CSS animations.
* **Toast Notifications:** Integrated a custom notification system to provide immediate user feedback.

---

![img](https://github.com/Faraz-Ali-1/Pacific/blob/3c7339fae7a9c40f631a05fa920b5658f053a326/screenshots/pacific%202.jpg)

---

## Lessons Learned

### Local Storage Synchronization
One of the primary challenges was ensuring the UI stayed in sync with the Local Storage. I struggled with updating the cart value badge and the total price whenever a user modified their item count. I overcame this by creating a centralized update function that reconciles the DOM state with the localStorage object on every click event.

### API Deployment Challenges
Deploying a local JSON file as a mock API on GitHub Pages presented issues because file paths behave differently in a production environment. I figured out that the API wouldn't work initially, but I succeeded by restructuring the project directory to use relative paths, ensuring the Fetch API could locate the data correctly.

---

![img](https://github.com/Faraz-Ali-1/Pacific/blob/3c7339fae7a9c40f631a05fa920b5658f053a326/screenshots/pacific%203.jpg)

---
## Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox, Grid)
* **Scripting:** Modern JavaScript (ES6+), Fetch API
* **Storage:** Web Storage API (Local Storage)

---

## License

This project is licensed under the MIT License.
