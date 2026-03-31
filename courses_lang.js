const languagesData = {
    python: {
        category: "language",
        tabName: "بايثون (Python)",
        title: "مسار لغة بايثون",
        description: "لغة بايثون هي الأسهل للمبتدئين والأقوى للذكاء الاصطناعي، وتحليل البيانات.",
        hexColor: "#3776AB",
        icon: "fa-brands fa-python",
        lessons: [
            { title: "أساسيات والإعداد", desc: "تثبيت بايثون وتجهيز بيئة العمل.", content: `### تثبيت بايثون وتجهيز بيئة العمل
بايثون هي لغة برمجة عالية المستوى، سهلة القراءة والكتابة. للبدء، نحتاج لتثبيت بايثون ومحرر أكواد.

#### 1. تثبيت Python
- اذهب إلى [python.org](https://www.python.org/) وحمل أحدث إصدار.
- تأكد من تفعيل خيار **"Add Python to PATH"** أثناء التثبيت.

#### 2. محرر الأكواد (Code Editor)
نوصي باستخدام **VS Code** مع إضافة (Extension) الخاصة ببايثون.

#### 3. أول كود لك
\`\`\`python
print("مرحباً بك في عالم بايثون!")
\`\`\`
ثم قم بتشغيله: \`python hello.py\``, refs: [{ text: "Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc", icon: "fa-youtube" }] },
            { title: "المتغيرات وأنواع البيانات", desc: "استخدام المتغيرات والأرقام والنصوص.", content: `### المتغيرات وأنواع البيانات
المتغير هو مكان في الذاكرة لتخزين البيانات. بايثون لغة ذكية وتعرف نوع البيانات تلقائياً.

#### أنواع البيانات الأساسية:
\`\`\`python
name = "أحمد"        # String نص
age = 25             # Integer عدد صحيح
height = 1.75        # Float عدد عشري
is_student = True    # Boolean منطقي

print(type(name))    # <class 'str'>
\`\`\``, refs: [{ text: "Corey Schafer", url: "https://www.youtube.com/watch?v=khKv-8q7YmY", icon: "fa-youtube" }] },
            { title: "العبارات الشرطية (If/Else)", desc: "التحكم في مسار البرنامج باستخدام الشروط.", content: `### التحكم في مسار البرنامج
\`\`\`python
age = 18

if age >= 18:
    print("أنت شخص بالغ")
elif age > 12:
    print("أنت مراهق")
else:
    print("أنت طفل")
\`\`\`

**ملاحظة:** بايثون تعتمد على **الإزاحة (Indentation)** بدل الأقواس المعقوفة.`, refs: [{ text: "FreeCodeCamp", url: "https://www.youtube.com/watch?v=k9nE7E8h35c", icon: "fa-youtube" }] },
            { title: "الحلقات (For/While)", desc: "كيفية تكرار الأوامر و المرور على القوائم.", content: `### الحلقات التكرارية
#### 1. حلقة For:
\`\`\`python
fruits = ["تفاح", "موز", "كرز"]
for fruit in fruits:
    print(fruit)
\`\`\`

#### 2. حلقة While:
\`\`\`python
count = 0
while count < 5:
    print("العدد هو:", count)
    count += 1
\`\`\``, refs: [{ text: "Corey Schafer", url: "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ", icon: "fa-youtube" }] },
            { title: "الدوال (Functions)", desc: "تقسيم الكود إلى أجزاء قابلة لإعادة الاستخدام.", content: `### الدوال (Functions)
الدالة هي بلوك من الكود يتم تشغيله عند استدعائه.

\`\`\`python
def say_hello(name):
    return f"مرحباً {name}، كيف حالك؟"

message = say_hello("محمد")
print(message)
\`\`\`

#### الفوائد:
1. **التنظيم**: جعل الكود أسهل في القراءة.
2. **إعادة الاستخدام**: اكتب الكود مرة واحدة واستخدمه عدة مرات.`, refs: [{ text: "CS50P", url: "https://www.youtube.com/watch?v=JP7ITIEtkTc", icon: "fa-youtube" }] },
            { title: "القوائم (Lists)", desc: "هياكل البيانات لترتيب المعلومات.", content: `### القوائم (Lists)
\`\`\`python
colors = ["أحمر", "أخضر", "أزرق"]

print(colors[0])       # أحمر
colors.append("أصفر")  # إضافة
colors.remove("أخضر")  # حذف
print(len(colors))     # العدد
\`\`\``, refs: [{ text: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/python-lists/", icon: "fa-globe" }] },
            { title: "القواميس (Dictionaries)", desc: "استخدام المفاتيح والقيم لتخزين البيانات.", content: `### القواميس (Dictionaries)
\`\`\`python
student = {
    "name": "ياسين",
    "age": 22,
    "grade": "A"
}

print(student["name"])
student["email"] = "yassine@example.com"

for key, value in student.items():
    print(f"{key}: {value}")
\`\`\``, refs: [{ text: "Corey Schafer", url: "https://www.youtube.com/watch?v=daefaLgNkw0", icon: "fa-youtube" }] },
            { title: "معالجة الملفات", desc: "قراءة وكتابة الملفات النصية محلياً.", content: `### معالجة الملفات
#### القراءة:
\`\`\`python
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)
\`\`\`

#### الكتابة:
\`\`\`python
with open("output.txt", "w") as file:
    file.write("هذا النص سيتم حفظه في الملف.")
\`\`\``, refs: [{ text: "Tech With Tim", url: "https://www.youtube.com/watch?v=qpteEA3O-MA", icon: "fa-youtube" }] },
            { title: "البرمجة الكائنية (OOP)", desc: "مفهوم الكائنات والفئات لبناء هيكلة قوية.", content: `### البرمجة الكائنية (OOP)
\`\`\`python
class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

    def drive(self):
        print(f"سيارة {self.brand} تتحرك الآن.")

my_car = Car("Toyota", 2022)
my_car.drive()
\`\`\``, refs: [{ text: "Corey Schafer", url: "https://www.youtube.com/watch?v=ZDa-Z5JzLm0", icon: "fa-youtube" }] },
            { title: "مقدمة جلب البيانات", desc: "استخدام مكتبات لاستخراج البيانات من الويب.", content: `### جلب البيانات من الويب
\`\`\`python
import requests
from bs4 import BeautifulSoup

url = "https://example.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")
print(soup.title.string)
\`\`\``, refs: [{ text: "FreeCodeCamp", url: "https://www.youtube.com/watch?v=XVv6mJpFOb0", icon: "fa-youtube" }] }
        ]
    },
    javascript: {
        category: "language",
        tabName: "جافاسكربت (JS)",
        title: "مسار الجافاسكربت",
        description: "لغة الويب الأولى. تجعل المواقع التفاعلية وتستخدم في تطبيقات الموبايل.",
        hexColor: "#F7DF1E",
        icon: "fa-brands fa-js",
        lessons: [
            { title: "مقدمة و DOM Basics", desc: "كيف تتفاعل جافاسكربت مع صفحات HTML.", content: `### مقدمة في جافاسكربت و DOM
الـ **DOM** هو الهيكل الذي يسمح للجافاسكربت بالوصول لعناصر HTML وتغييرها.

\`\`\`javascript
const title = document.getElementById('main-title');
title.innerText = "مرحباً بك في عالم JS!";
title.style.color = "blue";
\`\`\``, refs: [{ text: "Traversy Media", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c", icon: "fa-youtube" }] },
            { title: "المتغيرات (let/const)", desc: "الفرق بين التصريحات وكيفية تعريفها.", content: `### المتغيرات الحديثة
\`\`\`javascript
let score = 10;   // يمكن تغييرها
score = 15;

const pi = 3.14;  // ثابتة لا تتغير
// pi = 4; // خطأ!
\`\`\`

**نصيحة:** استخدم \`const\` دائماً إلا إذا كنت ستحتاج لتغيير القيمة.`, refs: [{ text: "JavaScript.info", url: "https://javascript.info/variables", icon: "fa-globe" }] },
            { title: "الدوال السهمية", desc: "استخدام Arrow Functions لتبسيط الكود.", content: `### الدوال السهمية (Arrow Functions)
\`\`\`javascript
// الطريقة التقليدية
function sum(a, b) { return a + b; }

// طريقة السهم
const sum = (a, b) => a + b;
const greet = name => \`مرحباً \${name}\`;
\`\`\``, refs: [{ text: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=h33Srr5J9nY", icon: "fa-youtube" }] },
            { title: "توابع المصفوفات", desc: "استخدام Map, Filter, و Reduce بفاعلية.", content: `### توابع المصفوفات (Array Methods)
\`\`\`javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);    // [2, 4, 6]

const ages = [15, 20, 25];
const adults = ages.filter(a => a >= 18); // [20, 25]

const total = nums.reduce((sum, n) => sum + n, 0); // 6
\`\`\``, refs: [{ text: "FreeCodeCamp", url: "https://www.youtube.com/watch?v=R8rmfD9Y5-c", icon: "fa-youtube" }] },
            { title: "الكائنات و JSON", desc: "تخزين البيانات وصيغة JSON العالمية.", content: `### الكائنات و JSON
\`\`\`javascript
const user = {
    name: "عمر",
    job: "مطور ويب",
    greet() { console.log("أهلاً!"); }
};
\`\`\`

#### JSON:
\`\`\`json
{ "id": 101, "status": "active" }
\`\`\``, refs: [{ text: "Mosh - Objects", url: "https://www.youtube.com/watch?v=W6NZfCO5SIk", icon: "fa-youtube" }] },
            { title: "التلاعب بـ DOM", desc: "تعديل HTML باستخدام الجافاسكربت.", content: `### التلاعب بـ DOM المتقدم
\`\`\`javascript
const newDiv = document.createElement('div');
newDiv.innerText = "أنا عنصر جديد!";
document.body.appendChild(newDiv);

const el = document.querySelector('.my-box');
el.classList.add('active');
el.classList.toggle('dark-mode');
\`\`\``, refs: [{ text: "Traversy Media", url: "https://www.youtube.com/watch?v=0ik6X4DJKCc", icon: "fa-youtube" }] },
            { title: "الأحداث (Events)", desc: "جعل الموقع يتفاعل مع نقرات المستخدم.", content: `### التعامل مع الأحداث
\`\`\`javascript
const btn = document.querySelector('#submit-btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("تم الضغط على الزر!");
});
\`\`\``, refs: [{ text: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=XF1_MlZ5l6M", icon: "fa-youtube" }] },
            { title: "البرمجة غير المتزامنة", desc: "شرح Promises و Async/Await.", content: `### البرمجة غير المتزامنة
\`\`\`javascript
async function getData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
getData();
\`\`\``, refs: [{ text: "The Net Ninja", url: "https://www.youtube.com/watch?v=ZcQyJ-cgZVI", icon: "fa-youtube" }] },
            { title: "تحديثات ES6+", desc: "استخدام Destructuring و Spread Operators.", content: `### ميزات جافاسكربت الحديثة
\`\`\`javascript
// التفكيك (Destructuring)
const user = { name: 'علي', age: 30 };
const { name, age } = user;

// عامل الانتشار (Spread)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
\`\`\``, refs: [{ text: "Fireship", url: "https://www.youtube.com/watch?v=Mus_vwhTCq0", icon: "fa-youtube" }] },
            { title: "وحدات ES (Modules)", desc: "تصميم كود نظيف وتصدير/استيراد الملفات.", content: `### وحدات البرمجة (ES Modules)
\`\`\`javascript
// export.js
export const add = (a, b) => a + b;
export default function greet() { console.log("أهلاً!"); }

// main.js
import { add } from './export.js';
import MyGreet from './export.js';
\`\`\``, refs: [{ text: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=cRHQNNiIGkA", icon: "fa-youtube" }] }
        ]
    },
    cpp: {
        category: "language",
        tabName: "سي بلس بلس (++C)",
        title: "مسار لغة ++C",
        description: "لغة الأداء العالي ومحركات الألعاب والأنظمة المدمجة.",
        hexColor: "#00599C",
        icon: "fa-solid fa-c",
        lessons: [
            { title: "مقدمة وفهم الـ Compiler", desc: "كيف يعمل المترجم وكيفية التثبيت.", content: `### مقدمة في ++C والمترجم
\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "مرحباً بك في ++C!" << std::endl;
    return 0;
}
\`\`\`

#### لماذا ++C؟
- **الأداء**: سريعة جداً وقريبة من العتاد.
- **السيطرة**: تحكم كامل في الذاكرة.`, refs: [{ text: "The Cherno", url: "https://www.youtube.com/watch?v=18c3MTX0PK0", icon: "fa-youtube" }] },
            { title: "أنواع البيانات وحجمها", desc: "فهم حجم الأنواع في الذاكرة.", content: `### أنواع البيانات والذاكرة
\`\`\`cpp
int age = 20;          // 4 بايت
double price = 19.99;  // 8 بايت
char grade = 'A';      // 1 بايت
bool isActive = true;  // 1 بايت

std::cout << sizeof(int) << std::endl; // 4
\`\`\``, refs: [{ text: "The Cherno - Variables", url: "https://www.youtube.com/watch?v=1vS1G1iGzvw", icon: "fa-youtube" }] },
            { title: "الشروط والمنطق", desc: "التحكم في تنفيذ سطور البرمجة.", content: `### الجمل الشرطية
\`\`\`cpp
int x = 10;
if (x > 5) {
    std::cout << "x أكبر من 5" << std::endl;
} else {
    std::cout << "x أصغر أو تساوي 5" << std::endl;
}

// Switch
switch (x) {
    case 10: std::cout << "عشرة"; break;
    default: std::cout << "آخر";
}
\`\`\``, refs: [{ text: "LearnCpp", url: "https://www.learncpp.com/", icon: "fa-globe" }] },
            { title: "الحلقات التكرارية", desc: "أهمية while و for في التكرار.", content: `### الحلقات (Loops)
\`\`\`cpp
// حلقة For
for (int i = 0; i < 5; i++) {
    std::cout << "الرقم: " << i << std::endl;
}

// حلقة While
int count = 0;
while (count < 3) {
    std::cout << count << std::endl;
    count++;
}
\`\`\``, refs: [{ text: "The Cherno - Loops", url: "https://www.youtube.com/watch?v=bPhR4tIn2Q0", icon: "fa-youtube" }] },
            { title: "الدوال (Functions)", desc: "تعريف الدوال وتمرير المعاملات.", content: `### الدوال في ++C
\`\`\`cpp
// تعريف الدالة
int add(int a, int b) {
    return a + b;
}

// تمرير بالمرجع
void doubleIt(int& x) {
    x *= 2;
}

int main() {
    int result = add(5, 3);
    int n = 10;
    doubleIt(n); // n = 20
}
\`\`\``, refs: [{ text: "The Cherno - Functions", url: "https://www.youtube.com/watch?v=V9zuox47zr0", icon: "fa-youtube" }] },
            { title: "المؤشرات (Pointers)", desc: "أهم الميزات: الوصول المباشر للذاكرة.", content: `### المؤشرات (Pointers)
المؤشر يخزن **عنوان** متغير آخر في الذاكرة.

\`\`\`cpp
int var = 10;
int* ptr = &var;

std::cout << "العنوان: " << ptr << std::endl;
std::cout << "القيمة: " << *ptr << std::endl;  // 10
\`\`\``, refs: [{ text: "The Cherno - Pointers", url: "https://www.youtube.com/watch?v=DTxHyVnPNX4", icon: "fa-youtube" }] },
            { title: "المراجع (References)", desc: "بديل أسهل وآمن للمؤشرات.", content: `### المراجع (References)
المرجع هو اسم مستعار (Alias) لمتغير موجود.

\`\`\`cpp
int a = 5;
int& ref = a;  // ref = اسم آخر لـ a
ref = 10;      // a أصبحت الآن 10
\`\`\``, refs: [{ text: "The Cherno - References", url: "https://www.youtube.com/watch?v=IzoFn3dfsPA", icon: "fa-youtube" }] },
            { title: "الكلاسات (Classes)", desc: "بناء هياكل برمجية تدعم OOP.", content: `### الكلاسات والبرمجة الكائنية
\`\`\`cpp
class Player {
public:
    int x, y, speed;

    Player(int s) : x(0), y(0), speed(s) {}

    void Move(int xa, int ya) {
        x += xa * speed;
        y += ya * speed;
    }
};

Player p(5);
p.Move(1, 0);
\`\`\``, refs: [{ text: "The Cherno - Classes", url: "https://www.youtube.com/watch?v=2BP8PoVj7aw", icon: "fa-youtube" }] },
            { title: "المؤشرات الذكية (Smart)", desc: "إدارة الذاكرة التلقائية الآمنة.", content: `### المؤشرات الذكية
\`\`\`cpp
#include <memory>

// unique_ptr: ملكية واحدة فقط
auto ptr = std::make_unique<int>(25);

// shared_ptr: ملكية مشتركة
auto sPtr = std::make_shared<int>(100);
\`\`\`
يتم حذف الذاكرة تلقائياً عند انتهاء النطاق.`, refs: [{ text: "CppCon", url: "https://www.youtube.com/watch?v=xGDLkt-jBJ4", icon: "fa-youtube" }] },
            { title: "مكتبة القوالب (STL)", desc: "استخدام Vectors, Maps والمزيد.", content: `### مكتبة STL
\`\`\`cpp
#include <vector>
#include <map>

std::vector<int> numbers = {1, 2, 3};
numbers.push_back(4);

std::map<std::string, int> ages;
ages["Ali"] = 25;

for (auto& n : numbers) {
    std::cout << n << " ";
}
\`\`\``, refs: [{ text: "The Cherno - STL", url: "https://www.youtube.com/watch?v=PNRju6_yn3o", icon: "fa-youtube" }] }
        ]
    },
    java: {
        category: "language",
        tabName: "جافا (Java)",
        title: "مسار لغة جافا",
        description: "لغة الشركات والتطبيقات الكبرى، أساس تطبيقات أندرويد وأنظمة البنوك.",
        hexColor: "#ED8B00",
        icon: "fa-brands fa-java",
        lessons: [
            { title: "مقدمة و JDK", desc: "تثبيت جافا وكتابة أول برنامج.", content: `### مقدمة في جافا
\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("مرحباً بك في جافا!");
    }
}
\`\`\`

#### خطوات البدء:
1. حمل **JDK** من [oracle.com](https://oracle.com).
2. استخدم **IntelliJ IDEA** كمحرر أكواد.`, refs: [{ text: "Programming with Mosh", url: "https://www.youtube.com/watch?v=eIrMbAQSU34", icon: "fa-youtube" }] },
            { title: "المتغيرات والأنواع", desc: "فهم الأنواع البدائية والنصوص.", content: `### المتغيرات في جافا
جافا لغة صارمة النوع (Strongly Typed)، يجب تحديد نوع البيانات.

\`\`\`java
int age = 25;
double price = 9.99;
String name = "أحمد";
boolean isActive = true;
char letter = 'A';
\`\`\``, refs: [{ text: "Bro Code", url: "https://www.youtube.com/watch?v=drQK8ciCAjY", icon: "fa-youtube" }] },
            { title: "الشروط والحلقات", desc: "التحكم في تدفق البرنامج.", content: `### الشروط والحلقات
\`\`\`java
// شرط
if (age >= 18) {
    System.out.println("بالغ");
}

// حلقة For
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// For-each
String[] fruits = {"تفاح", "موز"};
for (String f : fruits) {
    System.out.println(f);
}
\`\`\``, refs: [{ text: "Coding with John", url: "https://www.youtube.com/watch?v=ldYLYRNaucM", icon: "fa-youtube" }] },
            { title: "الدوال (Methods)", desc: "كتابة دوال وتمرير المعاملات.", content: `### الدوال (Methods)
\`\`\`java
public class Calculator {
    // دالة مع إرجاع قيمة
    static int add(int a, int b) {
        return a + b;
    }

    // دالة بدون إرجاع
    static void greet(String name) {
        System.out.println("مرحباً " + name);
    }

    public static void main(String[] args) {
        int result = add(5, 3);
        greet("محمد");
    }
}
\`\`\``, refs: [{ text: "Bro Code - Methods", url: "https://www.youtube.com/watch?v=cCgOESMQe44", icon: "fa-youtube" }] },
            { title: "الكلاسات والكائنات", desc: "أساسيات OOP في جافا.", content: `### البرمجة الكائنية (OOP)
\`\`\`java
class Car {
    String brand;
    int year;

    Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    void drive() {
        System.out.println(brand + " تتحرك!");
    }
}

Car myCar = new Car("Toyota", 2022);
myCar.drive();
\`\`\``, refs: [{ text: "Alex Lee - OOP", url: "https://www.youtube.com/watch?v=IUqKuGNasdM", icon: "fa-youtube" }] },
            { title: "الوراثة (Inheritance)", desc: "إنشاء فئات ترث من فئات أخرى.", content: `### الوراثة
\`\`\`java
class Animal {
    void eat() { System.out.println("Eating..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("Woof!"); }
}

Dog dog = new Dog();
dog.eat();  // موروثة
dog.bark(); // خاصة
\`\`\``, refs: [{ text: "Alex Lee - Inheritance", url: "https://www.youtube.com/watch?v=9JpNY-XAseg", icon: "fa-youtube" }] },
            { title: "الواجهات (Interfaces)", desc: "تحديد عقود قوية لتطبيق الهيكلية.", content: `### الواجهات
\`\`\`java
interface Playable {
    void play();
    void stop();
}

class MusicPlayer implements Playable {
    public void play() { System.out.println("Playing..."); }
    public void stop() { System.out.println("Stopped."); }
}
\`\`\``, refs: [{ text: "Coding with John", url: "https://www.youtube.com/watch?v=7MwnHQYvItA", icon: "fa-youtube" }] },
            { title: "إدارة الأخطاء (Exceptions)", desc: "حماية البرنامج من التوقف الفجائي.", content: `### معالجة الأخطاء
\`\`\`java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("خطأ رياضي: " + e.getMessage());
} finally {
    System.out.println("يتم تنفيذه دائماً.");
}
\`\`\``, refs: [{ text: "Bro Code", url: "https://www.youtube.com/watch?v=Xh0EwzYFh1E", icon: "fa-youtube" }] },
            { title: "مجموعات البيانات (Collections)", desc: "ArrayList و HashMap والمزيد.", content: `### Collections
\`\`\`java
import java.util.*;

ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");

HashMap<String, Integer> map = new HashMap<>();
map.put("Ali", 25);

System.out.println(map.get("Ali")); // 25
\`\`\``, refs: [{ text: "Amigoscode", url: "https://www.youtube.com/watch?v=Vi91qyjukZA", icon: "fa-youtube" }] },
            { title: "تعدد المسارات (Threading)", desc: "تنفيذ مهام متعددة في آن واحد.", content: `### تعدد المهام
\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("أعمل في الخلفية!");
    }
}

MyThread t = new MyThread();
t.start(); // لا تستخدم run() مباشرة
\`\`\``, refs: [{ text: "Coding with John", url: "https://www.youtube.com/watch?v=TCd8QIS-2KI", icon: "fa-youtube" }] }
        ]
    },
    csharp: {
        category: "language",
        tabName: "سي شارب (#C)",
        title: "مسار لغة #C",
        description: "لغة مايكروسوفت القوية، أساس تطوير ألعاب Unity وتطبيقات .NET للشركات.",
        hexColor: "#239120",
        icon: "fa-brands fa-microsoft",
        lessons: [
            { title: "التثبيت و Visual Studio", desc: "إعداد بيئة .NET للبدء في البرمجة.", content: `### البدء مع #C
\`\`\`csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("مرحباً بك في #C!");
    }
}
\`\`\`

#### الإعداد:
1. حمل **.NET SDK** من [dotnet.microsoft.com](https://dotnet.microsoft.com).
2. استخدم **Visual Studio** أو **VS Code**.`, refs: [{ text: "Programming with Mosh", url: "https://www.youtube.com/watch?v=gfkTfcpWqAY", icon: "fa-youtube" }] },
            { title: "أساسيات وتراكيب البيانات", desc: "كيف تعمل المتغيرات في C#.", content: `### المتغيرات في #C
\`\`\`csharp
int age = 30;
string name = "أحمد";
double salary = 1500.75;
bool isActive = true;

// var: تحديد النوع تلقائياً
var city = "الرياض";
\`\`\``, refs: [{ text: "FreeCodeCamp - C#", url: "https://www.youtube.com/watch?v=GhQdlIFylQ8", icon: "fa-youtube" }] },
            { title: "الدوال والخصائص", desc: "التفريق بين الدوال والخصائص.", content: `### الخصائص (Properties)
\`\`\`csharp
class Person {
    public string Name { get; set; }
    private int _age;

    public int Age {
        get { return _age; }
        set { if (value > 0) _age = value; }
    }
}

var p = new Person();
p.Name = "سارة";
\`\`\``, refs: [{ text: "Kudvenkat", url: "https://www.youtube.com/watch?v=m4XItA-9D4A", icon: "fa-youtube" }] },
            { title: "الفئات والوراثة", desc: "مفاهيم البرمجة الكائنية.", content: `### الوراثة في #C
\`\`\`csharp
class Animal {
    public void Eat() => Console.WriteLine("Eating...");
}

class Dog : Animal {
    public void Bark() => Console.WriteLine("Woof!");
}

var dog = new Dog();
dog.Eat();  // موروثة
dog.Bark(); // خاصة
\`\`\``, refs: [{ text: "Mosh - OOP C#", url: "https://www.youtube.com/watch?v=Z4zXqS1S2Q4", icon: "fa-youtube" }] },
            { title: "متغيرات Out و Ref", desc: "طرق متقدمة لتمرير المعاملات.", content: `### تمرير البارامترات
\`\`\`csharp
// ref: يجب تعيين قيمة قبل التمرير
void Increment(ref int n) => n++;

// out: لإرجاع قيمة من الدالة
void GetValues(out int x) { x = 10; }

int val = 5;
Increment(ref val); // val = 6
\`\`\``, refs: [{ text: "Kudvenkat", url: "https://www.youtube.com/watch?v=Gj9mIuHk16Y", icon: "fa-youtube" }] },
            { title: "المجموعات و LINQ", desc: "الاستعلام عن البيانات بسهولة.", content: `### تقنية LINQ
\`\`\`csharp
using System.Linq;

var numbers = new List<int> { 1, 5, 10, 15, 20 };
var results = numbers.Where(n => n > 5)
                     .OrderByDescending(n => n)
                     .ToList();
// [20, 15, 10]
\`\`\``, refs: [{ text: "Tim Corey - LINQ", url: "https://www.youtube.com/watch?v=NwjwDukLpeo", icon: "fa-youtube" }] },
            { title: "البرمجة غير المتزامنة", desc: "async و await لعدم تعطيل الواجهة.", content: `### Async / Await
\`\`\`csharp
public async Task<string> DownloadAsync() {
    using var client = new HttpClient();
    string data = await client.GetStringAsync("https://api.example.com");
    return data;
}
\`\`\``, refs: [{ text: "Tim Corey - Async", url: "https://www.youtube.com/watch?v=2moh18sh5p4", icon: "fa-youtube" }] },
            { title: "مفهوم Interfaces و DI", desc: "أنماط التصميم وحقن التبعية.", content: `### حقن التبعية (DI)
\`\`\`csharp
interface ILogger {
    void Log(string message);
}

class ConsoleLogger : ILogger {
    public void Log(string msg) => Console.WriteLine(msg);
}

// استخدام الواجهة بدل الكلاس مباشرة
ILogger logger = new ConsoleLogger();
logger.Log("تم بنجاح!");
\`\`\``, refs: [{ text: "Tim Corey - DI", url: "https://www.youtube.com/watch?v=Nk_kKABTjqk", icon: "fa-youtube" }] },
            { title: "أحداث ومفوضين", desc: "توجيه الوظائف (Delegates & Events).", content: `### المفوضين (Delegates)
\`\`\`csharp
public delegate void Notify(string message);

class EventDemo {
    public event Notify OnComplete;

    public void Process() {
        // ... عمل ما
        OnComplete?.Invoke("اكتمل!");
    }
}
\`\`\``, refs: [{ text: "Mosh - Delegates", url: "https://www.youtube.com/watch?v=ifwEbW82w90", icon: "fa-youtube" }] },
            { title: "مدخل Entity Framework", desc: "ربط التطبيق بقاعدة بيانات.", content: `### Entity Framework Core
\`\`\`csharp
// Model
public class Student {
    public int Id { get; set; }
    public string Name { get; set; }
}

// استعلام
var students = context.Students
    .Where(s => s.Name.Contains("أحمد"))
    .ToList();
\`\`\``, refs: [{ text: "Tim Corey - EF Core", url: "https://www.youtube.com/watch?v=yP8XgA4_fWQ", icon: "fa-youtube" }] }
        ]
    },
    php: {
        category: "language",
        tabName: "بي إتش بي (PHP)",
        title: "مسار لغة PHP",
        description: "لغة السيرفرات القوية التي تشغل أكثر من نصف مواقع الويب والوردبريس.",
        hexColor: "#777BB4",
        icon: "fa-brands fa-php",
        lessons: [
            { title: "مقدمة وإعداد الخادم", desc: "تثبيت XAMPP وتشغيل أول سكريبت.", content: `### مقدمة في PHP
PHP تعمل على السيرفر وترسل نتيجتها كـ HTML. ستحتاج **XAMPP**.

\`\`\`php
<?php
echo "أهلاً بك في عالم الويب!";
?>
\`\`\``, refs: [{ text: "Traversy Media PHP", url: "https://www.youtube.com/watch?v=BUCiSSyIGGU", icon: "fa-youtube" }] },
            { title: "المتغيرات والنصوص", desc: "تعريف المتغيرات وطباعتها.", content: `### المتغيرات في PHP
تبدأ المتغيرات بعلامة الدولار \`$\`.

\`\`\`php
$name = "مدونتي";
$year = 2024;
echo "اسم الموقع: " . $name;
echo "سنة: {$year}";
\`\`\``, refs: [{ text: "Program With Gio", url: "https://www.youtube.com/watch?v=E_D_T_W_kGk", icon: "fa-youtube" }] },
            { title: "المصفوفات", desc: "التعامل مع البيانات المعقدة.", content: `### المصفوفات (Arrays)
\`\`\`php
// عادية
$colors = ['red', 'blue', 'green'];
echo $colors[0]; // red

// مترابطة (Associative)
$user = ['id' => 1, 'name' => 'Ali'];
echo $user['name']; // Ali
\`\`\``, refs: [{ text: "Dani Krossing", url: "https://www.youtube.com/watch?v=0oE2K4-h26s", icon: "fa-youtube" }] },
            { title: "الشروط والحلقات", desc: "التحكم بمنطق الصفحات.", content: `### التحكم في المنطق
\`\`\`php
$isLoggedIn = true;

if ($isLoggedIn) {
    echo "مرحباً بك مجدداً!";
} else {
    echo "يرجى تسجيل الدخول.";
}

foreach ($colors as $color) {
    echo $color . "<br>";
}
\`\`\``, refs: [{ text: "FreeCodeCamp - PHP", url: "https://www.youtube.com/watch?v=OK_JCtrrv-c", icon: "fa-youtube" }] },
            { title: "الجلسات والكوكيز", desc: "إدارة جلسات المستخدم.", content: `### الجلسات (Sessions)
\`\`\`php
// بدء الجلسة
session_start();
$_SESSION['user_id'] = 123;
$_SESSION['username'] = "Ali";

// في صفحة أخرى
session_start();
echo $_SESSION['username'];
\`\`\``, refs: [{ text: "Dani Krossing", url: "https://www.youtube.com/watch?v=rZpX2kHqJ1U", icon: "fa-youtube" }] },
            { title: "النماذج GET/POST", desc: "التعامل مع نماذج HTML.", content: `### التعامل مع الفورم
\`\`\`php
// استقبال بيانات POST
$username = htmlspecialchars($_POST['username']);
$password = $_POST['password'];

// التحقق
if (empty($username)) {
    echo "اسم المستخدم مطلوب!";
}
\`\`\``, refs: [{ text: "Traversy Media - Forms", url: "https://www.youtube.com/watch?v=UeAEY0Pj1iA", icon: "fa-youtube" }] },
            { title: "قواعد البيانات (PDO)", desc: "الاتصال بـ MySQL بشكل آمن.", content: `### قواعد البيانات (PDO)
\`\`\`php
$pdo = new PDO("mysql:host=localhost;dbname=blog", "root", "");

// استعلام آمن (Prepared Statement)
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([1]);
$user = $stmt->fetch();
\`\`\``, refs: [{ text: "Dani Krossing", url: "https://www.youtube.com/watch?v=sOxxG-aB3sY", icon: "fa-youtube" }] },
            { title: "البرمجة الكائنية", desc: "الكلاسات والفئات في PHP.", content: `### OOP في PHP
\`\`\`php
class User {
    public string $name;

    public function __construct(string $n) {
        $this->name = $n;
    }

    public function greet(): string {
        return "مرحباً {$this->name}!";
    }
}

$ali = new User("Ali");
echo $ali->greet();
\`\`\``, refs: [{ text: "Traversy OOP PHP", url: "https://www.youtube.com/watch?v=Anz0AaXCC-4", icon: "fa-youtube" }] },
            { title: "نظام التوجيه (Routing)", desc: "إدارة الروابط في مشروع منظم.", content: `### نظام التوجيه
بدلاً من ملف لكل صفحة، نستخدم ملف واحد يدير الروابط.

\`\`\`php
$path = parse_url($_SERVER['REQUEST_URI'])['path'];

switch ($path) {
    case '/': require 'views/home.php'; break;
    case '/about': require 'views/about.php'; break;
    default: http_response_code(404);
}
\`\`\``, refs: [{ text: "Program With Gio", url: "https://www.youtube.com/watch?v=Ym2w8Bqf3uY", icon: "fa-youtube" }] },
            { title: "الحماية الأمنية", desc: "أساسيات الحماية ضد SQLi و XSS.", content: `### حماية الويب في PHP
#### ضد XSS:
\`\`\`php
echo htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');
\`\`\`

#### ضد SQL Injection:
\`\`\`php
// خطأ شائع!
$pdo->query("SELECT * FROM users WHERE id = $id");

// الطريقة الآمنة (Prepared)
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$id]);
\`\`\``, refs: [{ text: "PHP Security", url: "https://www.youtube.com/watch?v=Bnz-a_H5kFw", icon: "fa-youtube" }] }
        ]
    }
};
