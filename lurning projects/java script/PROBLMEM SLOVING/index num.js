const sentence ="Learn with Sumit is all about teaching web development skills and cechniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most opular technologies to convert you from a no stack to full stack developer. Learn with -umit also deep dives into advanced topics using the latest best practices for you easoned web developers.";

const match = sentence.match(/sumit/gi);
const occ = match ? match.length :0;
console.log(occ);