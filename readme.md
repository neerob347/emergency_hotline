1. The distinction between querySelector, querySelectorAll, getElementById, and getElementsByClassName ?

getElementById("id")  = একটাই element আনে (id সবসময় unique)। 

getElementsByClassName("class") = ওই class এর সব element আনে, live HTMLCollection রিটার্ন করে। 

querySelector("selector") = প্রথম যে element selector এর সাথে মিলে, সেটা আনে।

 querySelectorAll("selector") = সব মিলে যাওয়া element আনে, NodeList রিটার্ন করে। 

2.How do you create and insert a new element into the DOM?
Answer : document.createElement() দিয়ে নতুন উপাদান তৈরি  করতে হয় তারপর appendChild()  ব্যবহার করে তাকে DOM-এ যুক্ত করতে হয় । 

3. What is Event Bubbling and how does it work?
Answer:
Event Bubbling: কোনো উপাদানে ইভেন্ট ঘটলে তা প্যারেন্ট পর্যন্ত উপরে উঠতে থাকে।
Parent-->grandparent-->document

4.What is Event Delegation in JavaScript? Why is it useful?
Answer : অনেকগুলো উপাদানের জন্য একটি মাত্র প্যারেন্ট লিসেনার ব্যবহার করা হয় । এবং এটির মাধ্যমে চাইল্ড লিসেনার ধরা হয় । একটা ভালো দিক হলো মেমোরি কম ইউজ হয় । কারণ প্রতিটা চাইল্ডে আলাদা আলাদা ইভেন্ট বসাতে হয় না । 

5. What is the difference between preventDefault() and stopPropagation()methods?
Answer: preventDefault(): ইভেন্টের ডিফল্ট আচরণ (যেমন, লিংকে ক্লিক করলে পেজ পরিবর্তন) বন্ধ করে দেয়।
stopPropagation(): ইভেন্টকে DOM-এর উপরে ওঠা (bubbling) থেকে থামিয়ে দেয়।