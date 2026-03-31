const frameworksData = {
    react: {
        category: "framework",
        tabName: "رياكت (React)",
        title: "مسار إطار عمل React",
        description: "مكتبة مبنية بالـجافاسكربت بواسطة فيسبوك لإنشاء واجهات تفاعلية سريعة وقوية كتلك المستخدمة في انستجرام وفيسبوك.",
        hexColor: "#61DAFB",
        icon: "fa-brands fa-react",
        lessons: [
            { title: "المقدمة و Vite", desc: "لماذا React وكيفية إعداد مشروع بـ Vite.", content: `### لماذا React؟
React هي مكتبة جافاسكربت لبناء واجهات المستخدم (UI) بطريقة **تفاعلية**. بدلاً من تحديث الصفحة بالكامل، React تحدث فقط الأجزاء التي تغيرت.

#### إنشاء مشروع بـ Vite:
\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`

#### هيكل المشروع:
- \`src/App.jsx\` — المكون الرئيسي
- \`src/main.jsx\` — نقطة الدخول
- \`public/\` — الملفات الثابتة`, refs: [{ text: "Traversy Media", url: "https://www.youtube.com/watch?v=LDB4uaJ87e0", icon: "fa-youtube" }] },
            { title: "المبدأ الأساسي (Components)", desc: "كتابة وتقسيم صفحة الويب إلى أجزاء صغيرة.", content: `### المكونات (Components)
كل شيء في React هو **مكون** (Component). المكون هو دالة تُرجع HTML (بصيغة JSX).

\`\`\`jsx
// مكون بسيط
function Welcome() {
    return (
        <div>
            <h1>مرحباً بالعالم!</h1>
            <p>هذا أول مكون لي في React</p>
        </div>
    );
}

// استخدامه في مكون آخر
function App() {
    return (
        <div>
            <Welcome />
            <Welcome />
        </div>
    );
}
\`\`\`

#### قاعدة ذهبية:
اسم المكون يبدأ دائماً بحرف **كبير** (Capital Letter).`, refs: [{ text: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=Rh3tobg7hEo", icon: "fa-youtube" }] },
            { title: "التمرير والخصائص (Props)", desc: "كيفية تمرير البيانات بين المكونات بسهولة.", content: `### الخصائص (Props)
Props هي طريقة تمرير البيانات من مكون أب إلى مكون ابن.

\`\`\`jsx
function UserCard({ name, age, isOnline }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>العمر: {age}</p>
            <span>{isOnline ? "🟢 متصل" : "🔴 غير متصل"}</span>
        </div>
    );
}

function App() {
    return (
        <div>
            <UserCard name="أحمد" age={25} isOnline={true} />
            <UserCard name="سارة" age={22} isOnline={false} />
        </div>
    );
}
\`\`\`

**ملاحظة:** Props هي **للقراءة فقط** ولا يمكن تغييرها داخل المكون الابن.`, refs: [{ text: "Fireship", url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM", icon: "fa-youtube" }] },
            { title: "الحالة الداخلية (useState)", desc: "جعل الموقع يتفاعل وتغيير المحتوى ديناميكياً.", content: `### الحالة (useState)
\`useState\` هو Hook يسمح لك بتخزين بيانات متغيرة داخل المكون.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>العداد: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>إعادة</button>
        </div>
    );
}
\`\`\`

عند استدعاء \`setCount\`، React تعيد رسم المكون بالقيمة الجديدة تلقائياً!`, refs: [{ text: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=O6P86uwfdR0", icon: "fa-youtube" }] },
            { title: "تأثيرات الجانب (useEffect)", desc: "جلب بيانات من سيرفر وإدارة تغيرات الموقع.", content: `### useEffect
يستخدم لتنفيذ كود عند تحميل المكون أو عند تغير بيانات معينة.

\`\`\`jsx
import { useState, useEffect } from 'react';

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []); // [] = تشغيل مرة واحدة فقط

    if (loading) return <p>جاري التحميل...</p>;

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}
\`\`\``, refs: [{ text: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=0ZJgIjIuY7U", icon: "fa-youtube" }] },
            { title: "استخدام العناوين (React Router)", desc: "إنشاء موقع بصفحات متعددة دون إعادة تحميل.", content: `### React Router
\`\`\`bash
npm install react-router-dom
\`\`\`

\`\`\`jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">الرئيسية</Link>
                <Link to="/about">عنا</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
\`\`\``, refs: [{ text: "Traversy Media", url: "https://www.youtube.com/watch?v=vEn2k3uA9oE", icon: "fa-youtube" }] },
            { title: "إدارة الحالة المتقدمة", desc: "مفاهيم Context API و useReducer.", content: `### Context API
لمشاركة البيانات بين مكونات بعيدة عن بعضها بدون تمرير Props يدوياً.

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false);
    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            {children}
        </ThemeContext.Provider>
    );
}

function Navbar() {
    const { dark, setDark } = useContext(ThemeContext);
    return (
        <button onClick={() => setDark(!dark)}>
            {dark ? "☀️ فاتح" : "🌙 داكن"}
        </button>
    );
}
\`\`\``, refs: [{ text: "Dev Ed", url: "https://www.youtube.com/watch?v=35lXWvCuM8o", icon: "fa-youtube" }] },
            { title: "المكونات المعاد استخدامها", desc: "تصميم واجهات احترافية بـ Tailwind في React.", content: `### مكونات قابلة لإعادة الاستخدام
\`\`\`jsx
// زر عام قابل لإعادة الاستخدام
function Button({ children, variant = "primary", onClick }) {
    const base = "px-4 py-2 rounded font-bold transition";
    const styles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 hover:bg-gray-100"
    };

    return (
        <button className={\`\${base} \${styles[variant]}\`} onClick={onClick}>
            {children}
        </button>
    );
}

// الاستخدام
<Button variant="primary">حفظ</Button>
<Button variant="danger" onClick={handleDelete}>حذف</Button>
\`\`\``, refs: [{ text: "JavaScript Mastery", url: "https://www.youtube.com/watch?v=b9eMGE7ZnOM", icon: "fa-youtube" }] },
            { title: "إدارة الحالة المركزية Redux", desc: "نظرة سريعة على Redux Toolkit للمشاريع الكبيرة.", content: `### Redux Toolkit
\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

\`\`\`jsx
// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\``, refs: [{ text: "Codevolution", url: "https://www.youtube.com/watch?v=0W6i5GWqmJE", icon: "fa-youtube" }] },
            { title: "النشر والتحسين (Next.js)", desc: "تمهيد لدراسة فريم وورك Next.js المعتمد.", content: `### لماذا Next.js؟
Next.js يبني فوق React ويضيف:
- **SSR**: عرض من السيرفر (أسرع وأفضل لـ SEO).
- **File-based Routing**: كل ملف في \`pages/\` يصبح صفحة تلقائياً.
- **API Routes**: بناء خادم داخل المشروع نفسه.

\`\`\`bash
npx create-next-app@latest my-next-app
\`\`\`

\`\`\`jsx
// app/page.jsx
export default function Home() {
    return <h1>مرحباً من Next.js!</h1>;
}
\`\`\``, refs: [{ text: "Fireship Next.js", url: "https://www.youtube.com/watch?v=Sklc_fQBmcs", icon: "fa-youtube" }] }
        ]
    },
    nodejs: {
        category: "framework",
        tabName: "نود دوت جي إس (Node.js)",
        title: "مسار بيئة Node.js",
        description: "بيئة تشغيل الجافاسكربت على السيرفرات لبناء خوادم وواجهات برمجية لتطبيقات الموبايل ومواقع الويب.",
        hexColor: "#339933",
        icon: "fa-brands fa-node-js",
        lessons: [
            { title: "أساسيات و V8 Engine", desc: "كيف تعمل جافاسكربت كخادم، وتثبيت Node.", content: `### ما هو Node.js؟
Node.js يسمح بتشغيل جافاسكربت **خارج المتصفح** على السيرفر باستخدام محرك V8.

#### التثبيت:
حمل من [nodejs.org](https://nodejs.org) واختر LTS.

\`\`\`bash
node --version  # التحقق
\`\`\`

#### أول سكريبت:
\`\`\`javascript
// server.js
console.log("أهلاً من Node.js!");
console.log("النظام:", process.platform);
\`\`\`
\`\`\`bash
node server.js
\`\`\``, refs: [{ text: "Traversy Media", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4", icon: "fa-youtube" }] },
            { title: "المكتبات المدمجة", desc: "التعامل مع ملفات النظام والروابط داخلياً.", content: `### الموديولات المدمجة
\`\`\`javascript
// قراءة ملف
const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

// معلومات المسار
const path = require('path');
console.log(path.join(__dirname, 'public', 'index.html'));

// معلومات النظام
const os = require('os');
console.log("الذاكرة:", os.totalmem() / 1024 / 1024, "MB");
\`\`\``, refs: [{ text: "Programming with Mosh", url: "https://www.youtube.com/watch?v=TlB_eWDSMt4", icon: "fa-youtube" }] },
            { title: "مدير الحزم NPM", desc: "طريقة تنزيل وإدارة مكتبات المطوّرين.", content: `### NPM (Node Package Manager)
\`\`\`bash
# تهيئة مشروع
npm init -y

# تثبيت مكتبة
npm install express

# تثبيت كـ أداة تطوير
npm install --save-dev nodemon

# تشغيل script من package.json
npm run dev
\`\`\`

#### package.json:
\`\`\`json
{
    "scripts": {
        "dev": "nodemon server.js",
        "start": "node server.js"
    }
}
\`\`\``, refs: [{ text: "Traversy Media NPM", url: "https://www.youtube.com/watch?v=jHDhaSSKmB0", icon: "fa-youtube" }] },
            { title: "السيرفر الأساسي", desc: "إنشاء أول خادم ويب يستقبل ويعالج طلبات.", content: `### خادم HTTP الأساسي
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if (req.url === '/') {
        res.end('<h1>الصفحة الرئيسية</h1>');
    } else if (req.url === '/api') {
        res.end(JSON.stringify({ msg: "أهلاً!" }));
    } else {
        res.writeHead(404);
        res.end('<h1>404 - غير موجود</h1>');
    }
});

server.listen(3000, () => console.log("يعمل على المنفذ 3000"));
\`\`\``, refs: [{ text: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=Oe421EPjeEQ", icon: "fa-youtube" }] },
            { title: "مقدمة لإطار Express.js", desc: "كتابة واجهات برمجة بأسرع وأبسط طريقة.", content: `### Express.js
\`\`\`bash
npm install express
\`\`\`

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('مرحباً بك في Express!');
});

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'أحمد' },
        { id: 2, name: 'سارة' }
    ]);
});

app.listen(3000, () => console.log("Server running on 3000"));
\`\`\``, refs: [{ text: "Traversy Media Express", url: "https://www.youtube.com/watch?v=L72fhGm1tfE", icon: "fa-youtube" }] },
            { title: "الوسيط (Middleware)", desc: "كيف تعالج الطلبات قبل الرد عليها.", content: `### Middleware
هي دوال تعمل **بين** استلام الطلب وإرسال الرد.

\`\`\`javascript
// Middleware لتسجيل الطلبات
function logger(req, res, next) {
    console.log(\`\${req.method} \${req.url}\`);
    next(); // الانتقال للوسيط التالي
}

app.use(logger);

// Middleware للتحقق من المصادقة
function auth(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'غير مصرح' });
    next();
}

app.get('/protected', auth, (req, res) => {
    res.json({ secret: 'بيانات سرية' });
});
\`\`\``, refs: [{ text: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=lY6icfhap2o", icon: "fa-youtube" }] },
            { title: "ربط MongoDB السحابة", desc: "تخزين وجلب بيانات باستخدام Mongoose.", content: `### MongoDB + Mongoose
\`\`\`bash
npm install mongoose
\`\`\`

\`\`\`javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb');

// تعريف النموذج
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// إنشاء مستخدم
const newUser = new User({ name: 'أحمد', email: 'a@b.com' });
await newUser.save();

// جلب الكل
const users = await User.find();
\`\`\``, refs: [{ text: "Traversy Node API", url: "https://www.youtube.com/watch?v=vjf774RKrLc", icon: "fa-youtube" }] },
            { title: "المصادقة (JWT & Auth)", desc: "كيف تبني تسجيل دخول آمن بالتوكنات.", content: `### JWT Authentication
\`\`\`bash
npm install jsonwebtoken bcryptjs
\`\`\`

\`\`\`javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// تسجيل
app.post('/register', async (req, res) => {
    const hashed = await bcrypt.hash(req.body.password, 10);
    // حفظ المستخدم في DB
});

// تسجيل دخول
app.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const valid = await bcrypt.compare(req.body.password, user.password);

    if (valid) {
        const token = jwt.sign({ id: user._id }, 'SECRET_KEY');
        res.json({ token });
    }
});
\`\`\``, refs: [{ text: "Web Dev Simplified", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4", icon: "fa-youtube" }] },
            { title: "هندسة RESTful API", desc: "معايير تصميم واجهات تواصل سليمة.", content: `### RESTful API
\`\`\`javascript
// CRUD كامل
app.get('/api/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/api/posts', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
});

app.put('/api/posts/:id', async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json(post);
});

app.delete('/api/posts/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'تم الحذف' });
});
\`\`\``, refs: [{ text: "Academind", url: "https://www.youtube.com/watch?v=0oXYLzAydcs", icon: "fa-youtube" }] },
            { title: "الأمان والنطاقات الكبيرة", desc: "حماية السيرفر من الهجمات.", content: `### أمان الخادم
\`\`\`bash
npm install helmet cors express-rate-limit
\`\`\`

\`\`\`javascript
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

app.use(helmet());        // حماية Headers
app.use(cors());           // السماح بالطلبات الخارجية

// تحديد عدد الطلبات (ضد DDOS)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 دقيقة
    max: 100                   // 100 طلب كحد أقصى
});
app.use(limiter);
\`\`\``, refs: [{ text: "Fireship Node Sec", url: "https://www.youtube.com/watch?v=cbVQEBK_iA4", icon: "fa-youtube" }] }
        ]
    },
    django: {
        category: "framework",
        tabName: "جانغو (Django)",
        title: "إطار عمل جانغو (بايثون)",
        description: "إطار عمل للغة بايثون يتيح لك بناء تطبيقات ويب متكاملة، آمنة وموثوقة بسرعة قياسية مع لوحة تحكم إدارية مدمجة.",
        hexColor: "#092E20",
        icon: "fa-brands fa-python",
        lessons: [
            { title: "الهيكلية وإعداد المشروع", desc: "فهم نظام MVT وكيف تنشئ ملفات جانغو.", content: `### إعداد مشروع Django
\`\`\`bash
pip install django
django-admin startproject mysite
cd mysite
python manage.py runserver
\`\`\`

#### إنشاء تطبيق:
\`\`\`bash
python manage.py startapp blog
\`\`\`

#### هيكل MVT:
- **Model** — قاعدة البيانات
- **View** — المنطق البرمجي
- **Template** — واجهة HTML`, refs: [{ text: "Corey Schafer Django", url: "https://www.youtube.com/watch?v=UmljXZIypDc", icon: "fa-youtube" }] },
            { title: "التوجيه والروابط (URLs)", desc: "بناء صفحات لموقعك وتمرير طلبات الويب.", content: `### نظام التوجيه
\`\`\`python
# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('post/<int:pk>/', views.post_detail, name='post-detail'),
]

# blog/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("الصفحة الرئيسية")

def post_detail(request, pk):
    return HttpResponse(f"مقال رقم {pk}")
\`\`\``, refs: [{ text: "Dennis Ivy", url: "https://www.youtube.com/watch?v=Vq0Y8lE1w3E", icon: "fa-youtube" }] },
            { title: "القوالب (Templates)", desc: "كيف تعرض وتعدل الـ HTML بحركات ديناميكية.", content: `### نظام القوالب (Templates)
\`\`\`html
<!-- templates/blog/home.html -->
{% extends "base.html" %}

{% block content %}
    <h1>{{ page_title }}</h1>

    {% for post in posts %}
        <article>
            <h2>{{ post.title }}</h2>
            <p>{{ post.content|truncatewords:30 }}</p>
            <small>بواسطة {{ post.author }} — {{ post.date }}</small>
        </article>
    {% empty %}
        <p>لا توجد مقالات.</p>
    {% endfor %}
{% endblock %}
\`\`\``, refs: [{ text: "Programming with Mosh", url: "https://www.youtube.com/watch?v=rHux0gMZ3Eg", icon: "fa-youtube" }] },
            { title: "قاعدة البيانات (Models)", desc: "تحويل كلاسات بايثون لجداول في الـ Database.", content: `### النماذج (Models)
\`\`\`python
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
\`\`\`

\`\`\`bash
python manage.py makemigrations
python manage.py migrate
\`\`\``, refs: [{ text: "Corey Schafer - Models", url: "https://www.youtube.com/watch?v=aHcO4no5mC4", icon: "fa-youtube" }] },
            { title: "لوحة تحكم الموقع (Admin)", desc: "إعداد الصلاحيات واستخدام الإدارة الجاهزة.", content: `### لوحة Admin
\`\`\`bash
python manage.py createsuperuser
\`\`\`

\`\`\`python
# blog/admin.py
from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'created']
    search_fields = ['title', 'content']
    list_filter = ['created', 'author']
\`\`\`

اذهب إلى \`/admin/\` لإدارة المحتوى بالكامل!`, refs: [{ text: "Dennis Ivy Admin", url: "https://www.youtube.com/watch?v=P_J1Ztoz_qY", icon: "fa-youtube" }] },
            { title: "حفظ وتعديل البيانات (Forms)", desc: "عمل استمارات إدخال والتحقق من صحتها.", content: `### النماذج (Forms)
\`\`\`python
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content']

# views.py
def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('home')
    else:
        form = PostForm()
    return render(request, 'create.html', {'form': form})
\`\`\``, refs: [{ text: "Corey Schafer - Forms", url: "https://www.youtube.com/watch?v=6-XXvUENY_8", icon: "fa-youtube" }] },
            { title: "المصادقة والمستخدمين", desc: "إضافة التسجيل وتسجيل الدخول.", content: `### نظام المصادقة المدمج
\`\`\`python
# urls.py
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]

# حماية صفحة
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
    return render(request, 'dashboard.html')
\`\`\``, refs: [{ text: "Dennis Ivy Auth", url: "https://www.youtube.com/watch?v=tUqUdu0Sjyc", icon: "fa-youtube" }] },
            { title: "الملفات والصور", desc: "رفع الصور الشخصية وإدارتها.", content: `### رفع الملفات
\`\`\`python
# settings.py
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# models.py
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatars/', default='default.jpg')
\`\`\`

\`\`\`bash
pip install Pillow
\`\`\``, refs: [{ text: "Corey Schafer", url: "https://www.youtube.com/watch?v=8iCqlFyFU2s", icon: "fa-youtube" }] },
            { title: "طرق العرض المتقدمة (CBVs)", desc: "تقليل الكود بالاعتماد على الفئات المبنية.", content: `### Class-Based Views
\`\`\`python
from django.views.generic import ListView, DetailView, CreateView

class PostListView(ListView):
    model = Post
    template_name = 'blog/home.html'
    context_object_name = 'posts'
    ordering = ['-created']
    paginate_by = 10

class PostDetailView(DetailView):
    model = Post

class PostCreateView(CreateView):
    model = Post
    fields = ['title', 'content']
\`\`\`

أقل كود، نفس النتيجة!`, refs: [{ text: "Dennis CBVs", url: "https://www.youtube.com/watch?v=-s7e_Fy6nfc", icon: "fa-youtube" }] },
            { title: "برمجة واجهات REST", desc: "مقدمة في Django REST Framework.", content: `### Django REST Framework
\`\`\`bash
pip install djangorestframework
\`\`\`

\`\`\`python
from rest_framework import serializers, viewsets

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
\`\`\`

يوفر لك واجهة API جاهزة وقابلة للتصفح!`, refs: [{ text: "Dennis Ivy DRF", url: "https://www.youtube.com/watch?v=c708Nf0q8jg", icon: "fa-youtube" }] }
        ]
    },
    laravel: {
        category: "framework",
        tabName: "لارافيل (Laravel)",
        title: "إطار عمل لارافيل (PHP)",
        description: "الإطار الأكثر شهرة للغة PHP يوفر لك بنية سهلة، أنظمة أمان وتوجيه بسيطة للغاية.",
        hexColor: "#FF2D20",
        icon: "fa-brands fa-laravel",
        lessons: [
            { title: "أساسيات وتثبيت Composer", desc: "مفهوم MVC وبدء مشروع لارافيل.", content: `### بدء مشروع Laravel
\`\`\`bash
composer create-project laravel/laravel myapp
cd myapp
php artisan serve
\`\`\`

#### نمط MVC:
- **Model**: بيانات قاعدة البيانات
- **View**: واجهة المستخدم (Blade)
- **Controller**: المنطق البرمجي`, refs: [{ text: "Traversy Media Laravel", url: "https://www.youtube.com/watch?v=MFh0Fd7BsjE", icon: "fa-youtube" }] },
            { title: "منظومة التوجيه (Routes)", desc: "تعيين الطرق والروابط.", content: `### التوجيه
\`\`\`php
// routes/web.php
Route::get('/', function () {
    return view('welcome');
});

Route::get('/posts/{id}', [PostController::class, 'show']);

// مجموعة محمية
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashController::class, 'index']);
});
\`\`\``, refs: [{ text: "FreeCodeCamp", url: "https://www.youtube.com/watch?v=MYyJ4PuL4pY", icon: "fa-youtube" }] },
            { title: "عرض البيانات مع Blade", desc: "محرك القوالب الخاص بلارافيل.", content: `### محرك Blade
\`\`\`html
<!-- resources/views/posts/index.blade.php -->
@extends('layouts.app')

@section('content')
    <h1>{{ $title }}</h1>

    @foreach($posts as $post)
        <div class="card">
            <h2>{{ $post->title }}</h2>
            <p>{{ Str::limit($post->body, 100) }}</p>
        </div>
    @endforeach

    {{ $posts->links() }}  {{-- ترقيم الصفحات --}}
@endsection
\`\`\``, refs: [{ text: "Code With Dary", url: "https://www.youtube.com/watch?v=5Vj-Fm-GgTo", icon: "fa-youtube" }] },
            { title: "قواعد البيانات Eloquent", desc: "أقوى ميزة في لارافيل.", content: `### Eloquent ORM
\`\`\`php
// إنشاء Model + Migration
php artisan make:model Post -m

// app/Models/Post.php
class Post extends Model {
    protected $fillable = ['title', 'body', 'user_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}

// الاستخدام
$posts = Post::where('user_id', 1)->latest()->get();
$post = Post::create(['title' => 'عنوان', 'body' => 'محتوى']);
\`\`\``, refs: [{ text: "Laravel Daily", url: "https://www.youtube.com/watch?v=1F2KDE-q_5E", icon: "fa-youtube" }] },
            { title: "تهجير البيانات (Migrations)", desc: "تصميم جداول الـ Database بالكود.", content: `### Migrations
\`\`\`php
// database/migrations/create_posts_table.php
public function up() {
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('body');
        $table->foreignId('user_id')->constrained();
        $table->timestamps();
    });
}
\`\`\`

\`\`\`bash
php artisan migrate
php artisan migrate:rollback
\`\`\``, refs: [{ text: "Code With Dary", url: "https://www.youtube.com/watch?v=tY8A3M1QyB4", icon: "fa-youtube" }] },
            { title: "التحقق والـ Controllers", desc: "استلام مدخلات وتأكيدها.", content: `### Controllers + Validation
\`\`\`bash
php artisan make:controller PostController --resource
\`\`\`

\`\`\`php
class PostController extends Controller {
    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'body'  => 'required|min:10',
        ]);

        Post::create($validated);
        return redirect('/posts')->with('success', 'تم النشر!');
    }
}
\`\`\``, refs: [{ text: "Traversy Controllers", url: "https://www.youtube.com/watch?v=Qh_L3YF9qX0", icon: "fa-youtube" }] },
            { title: "إدارة أعضاء الموقع", desc: "استخدام Breeze للتسجيل.", content: `### Laravel Breeze
\`\`\`bash
composer require laravel/breeze --dev
php artisan breeze:install
npm install && npm run dev
php artisan migrate
\`\`\`

يوفر لك تلقائياً:
- صفحة تسجيل دخول
- صفحة إنشاء حساب
- إعادة تعيين كلمة المرور
- حماية الصفحات بـ Middleware`, refs: [{ text: "Laravel Daily - Breeze", url: "https://www.youtube.com/watch?v=Cq_y5UquVTo", icon: "fa-youtube" }] },
            { title: "رفع الملفات والصور", desc: "نظام Storage لحفظ الملفات.", content: `### رفع الملفات
\`\`\`php
public function upload(Request $request) {
    $request->validate(['image' => 'required|image|max:2048']);

    $path = $request->file('image')->store('uploads', 'public');
    // $path = "uploads/filename.jpg"
}
\`\`\`

\`\`\`bash
php artisan storage:link
\`\`\``, refs: [{ text: "Code With Dary", url: "https://www.youtube.com/watch?v=hPZ2S9-I3yQ", icon: "fa-youtube" }] },
            { title: "العلاقات المتقدمة", desc: "روابط بين الجداول.", content: `### علاقات Eloquent
\`\`\`php
// One to Many
class User extends Model {
    public function posts() {
        return $this->hasMany(Post::class);
    }
}

// Many to Many
class Post extends Model {
    public function tags() {
        return $this->belongsToMany(Tag::class);
    }
}

// الاستخدام
$user->posts;
$post->tags()->attach([1, 2, 3]);
\`\`\``, refs: [{ text: "Laravel Daily Eloquent", url: "https://www.youtube.com/watch?v=vV1iTqH9PzA", icon: "fa-youtube" }] },
            { title: "واجهات REST API", desc: "استخراج بيانات JSON للموبايل.", content: `### Laravel API
\`\`\`php
// routes/api.php
Route::apiResource('posts', PostApiController::class);

// Controller
class PostApiController extends Controller {
    public function index() {
        return Post::with('user')->paginate(15);
    }

    public function store(Request $request) {
        return Post::create($request->validated());
    }
}
\`\`\`

\`\`\`bash
# الاختبار
curl http://localhost:8000/api/posts
\`\`\``, refs: [{ text: "Traversy Media API", url: "https://www.youtube.com/watch?v=pIGy_Gj1MZI", icon: "fa-youtube" }] }
        ]
    },
    flutter: {
        category: "framework",
        tabName: "فلاتر (Flutter)",
        title: "مسار فلاتر لتطبيقات الهواتف",
        description: "الأداة الأقوى من جوجل لصنع تطبيقات لهواتف آيفون وأندرويد باستخدام كود واحد بلغة Dart.",
        hexColor: "#02569B",
        icon: "fa-brands fa-google",
        lessons: [
            { title: "أهمية فلاتر والبيئة", desc: "كيف تعمل لغة الدارت وما هو الويدجت؟", content: `### ما هو Flutter؟
Flutter يبني تطبيقات **أصلية** لأندرويد وآيفون من **كود واحد** بلغة Dart.

#### الإعداد:
1. حمل Flutter SDK من [flutter.dev](https://flutter.dev)
2. ثبت Android Studio

\`\`\`bash
flutter create my_app
cd my_app
flutter run
\`\`\`

\`\`\`dart
void main() {
    runApp(MaterialApp(home: Text("مرحباً!")));
}
\`\`\``, refs: [{ text: "Academind Flutter", url: "https://www.youtube.com/watch?v=1ukSR1GRtMU", icon: "fa-youtube" }] },
            { title: "نظام التصميم بالـ Widgets", desc: "فهم الأعمدة والصفوف وتجميع العناصر.", content: `### الـ Widgets
كل شيء في Flutter هو **Widget** (كنظام المكونات في React).

\`\`\`dart
class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(title: Text("تطبيقي")),
            body: Column(
                children: [
                    Text("مرحباً!", style: TextStyle(fontSize: 24)),
                    SizedBox(height: 16),
                    ElevatedButton(
                        onPressed: () {},
                        child: Text("اضغط هنا"),
                    ),
                ],
            ),
        );
    }
}
\`\`\``, refs: [{ text: "Net Ninja Flutter", url: "https://www.youtube.com/watch?v=1xipg02Wu8s", icon: "fa-youtube" }] },
            { title: "الحالة (Stateless/Stateful)", desc: "كيف تحدث بيانات التطبيق.", content: `### إدارة الحالة
\`\`\`dart
class CounterApp extends StatefulWidget {
    @override
    _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
    int count = 0;

    @override
    Widget build(BuildContext context) {
        return Column(children: [
            Text("العداد: $count", style: TextStyle(fontSize: 32)),
            ElevatedButton(
                onPressed: () => setState(() => count++),
                child: Text("+1"),
            ),
        ]);
    }
}
\`\`\``, refs: [{ text: "Code Pur", url: "https://www.youtube.com/watch?v=kYIUBZt2m44", icon: "fa-youtube" }] },
            { title: "القوائم (ListView & Grids)", desc: "إنشاء قوائم سلسة للمنتجات.", content: `### القوائم
\`\`\`dart
ListView.builder(
    itemCount: products.length,
    itemBuilder: (context, index) {
        return ListTile(
            leading: Icon(Icons.shopping_cart),
            title: Text(products[index].name),
            subtitle: Text("\${products[index].price} د.ج"),
            trailing: Icon(Icons.arrow_forward),
            onTap: () => navigateToDetail(products[index]),
        );
    },
)
\`\`\``, refs: [{ text: "Reso Coder", url: "https://www.youtube.com/watch?v=I4A2uX5aZ8I", icon: "fa-youtube" }] },
            { title: "الواجهة المتجاوبة (UI/UX)", desc: "الألوان، الثيمات والانتقالات.", content: `### التصميم والثيمات
\`\`\`dart
MaterialApp(
    theme: ThemeData(
        primarySwatch: Colors.indigo,
        fontFamily: 'Cairo',
        textTheme: TextTheme(
            headline6: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
        ),
    ),
    darkTheme: ThemeData.dark(),
    themeMode: ThemeMode.system,
)
\`\`\``, refs: [{ text: "Marcus Ng", url: "https://www.youtube.com/watch?v=FjI1V1W4dXY", icon: "fa-youtube" }] },
            { title: "التنقل (Navigation)", desc: "التنقل بين شاشات التطبيق.", content: `### Navigation
\`\`\`dart
// انتقال بسيط
Navigator.push(context,
    MaterialPageRoute(builder: (ctx) => DetailScreen(id: 1))
);

// انتقال باسم المسار
MaterialApp(
    routes: {
        '/': (ctx) => HomeScreen(),
        '/detail': (ctx) => DetailScreen(),
    },
);

Navigator.pushNamed(context, '/detail');
\`\`\``, refs: [{ text: "Net Ninja Nav", url: "https://www.youtube.com/watch?v=hBwzO0z_ZmA", icon: "fa-youtube" }] },
            { title: "جلب الـ API", desc: "جلب بيانات من الإنترنت.", content: `### HTTP Requests
\`\`\`yaml
# pubspec.yaml
dependencies:
  http: ^1.1.0
\`\`\`

\`\`\`dart
import 'package:http/http.dart' as http;
import 'dart:convert';

Future<List<Post>> fetchPosts() async {
    final response = await http.get(
        Uri.parse('https://jsonplaceholder.typicode.com/posts')
    );
    final List data = json.decode(response.body);
    return data.map((j) => Post.fromJson(j)).toList();
}
\`\`\``, refs: [{ text: "Techie Blossom", url: "https://www.youtube.com/watch?v=3g_IeXhB4-0", icon: "fa-youtube" }] },
            { title: "إدارة البيانات: Provider", desc: "نظام بسيط لترتيب بيانات التطبيق.", content: `### Provider
\`\`\`dart
class CartProvider extends ChangeNotifier {
    List<Product> _items = [];

    List<Product> get items => _items;

    void add(Product p) {
        _items.add(p);
        notifyListeners(); // إعلام الواجهة بالتحديث
    }
}

// الاستخدام
Consumer<CartProvider>(
    builder: (ctx, cart, _) => Text("السلة: \${cart.items.length}"),
)
\`\`\``, refs: [{ text: "Fireship Provider", url: "https://www.youtube.com/watch?v=d_m5csmrf7I", icon: "fa-youtube" }] },
            { title: "ربط فايربيس (Firebase)", desc: "خوادم جوجل لتسجيل الدخول وقواعد البيانات.", content: `### Firebase + Flutter
\`\`\`bash
flutter pub add firebase_core firebase_auth cloud_firestore
\`\`\`

\`\`\`dart
// تسجيل الدخول
final credential = await FirebaseAuth.instance
    .signInWithEmailAndPassword(email: email, password: password);

// جلب بيانات
final snapshot = await FirebaseFirestore.instance
    .collection('posts')
    .orderBy('date', descending: true)
    .get();
\`\`\``, refs: [{ text: "Net Ninja Firebase", url: "https://www.youtube.com/watch?v=W1pNjCSHQ5w", icon: "fa-youtube" }] },
            { title: "بناء ملفات النشر", desc: "تصدير التطبيق لجوجل بلاي و App Store.", content: `### النشر
#### Android (APK / AAB):
\`\`\`bash
flutter build apk --release
flutter build appbundle --release
\`\`\`

#### iOS:
\`\`\`bash
flutter build ios --release
\`\`\`

ثم ارفعه عبر:
- **Google Play Console** لأندرويد
- **App Store Connect** لآيفون

**نصيحة:** تأكد من تغيير اسم التطبيق والأيقونة قبل النشر!`, refs: [{ text: "Vandad APK", url: "https://www.youtube.com/watch?v=f7D2u2vQ2vM", icon: "fa-youtube" }] }
        ]
    }
};
