# Parashar Gawande - Personal Website

A modern, responsive personal website built with Docusaurus showcasing my skills, projects, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Project Showcase**: Dedicated section to display portfolio projects
- **Professional Experience**: Timeline of work experience and achievements
- **Skills Section**: Visual representation of technical skills and technologies
- **Blog Integration**: Share insights and tutorials
- **Dark/Light Mode**: Toggle between themes
- **SEO Optimized**: Built-in SEO features for better discoverability

## 🛠️ Built With

- **Docusaurus 3** - Static site generator
- **React** - Frontend framework
- **TypeScript** - Type safety
- **CSS Modules** - Styled components
- **Markdown** - Content management

## 📁 Project Structure

```
my-website/
├── src/
│   ├── pages/
│   │   └── index.tsx          # Homepage with hero, skills, experience sections
│   └── css/
│       └── custom.css         # Global styles and custom components
├── docs/
│   └── intro.md              # About page
├── projects/
│   └── index.md              # Projects showcase
├── blog/                     # Blog posts
├── static/
│   └── img/                  # Images and assets
└── docusaurus.config.ts      # Site configuration
```

## 🎨 Customization

### Personal Information

1. **Update `docusaurus.config.ts`**:
   - Change title, tagline, and URLs
   - Update social media links
   - Modify navigation items

2. **Edit Homepage (`src/pages/index.tsx`)**:
   - Update hero section content
   - Modify skills and technologies
   - Customize experience timeline
   - Change contact information

3. **Update About Page (`docs/intro.md`)**:
   - Personal background and story
   - Education and certifications
   - Professional philosophy
   - Contact details

4. **Customize Projects (`projects/index.md`)**:
   - Add your actual projects
   - Include live demos and GitHub links
   - Update technologies used

### Styling

- **Colors**: Modify CSS variables in `src/css/custom.css`
- **Layout**: Adjust component styles in `src/pages/index.module.css`
- **Typography**: Update font styles and sizes

### Content

- **Blog Posts**: Add new posts in the `blog/` directory
- **Images**: Replace placeholder images in `static/img/`
- **Resume**: Add your resume PDF to `static/` directory

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/parashargawande/parashargawande.github.io.git
   cd parashargawande.github.io/my-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `build/` directory.

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in the `blog/` directory
2. Use the following frontmatter:
   ```markdown
   ---
   slug: your-post-slug
   title: Your Post Title
   authors: [parashargawande]
   tags: [tag1, tag2]
   ---
   ```

### Adding Projects

1. Edit `projects/index.md`
2. Add project details with:
   - Project title and description
   - Technologies used
   - Live demo and GitHub links
   - Screenshots or images

### Updating Skills

1. Edit the `skills` array in `src/pages/index.tsx`
2. Add or remove skill categories and technologies
3. Update the styling as needed

## 🎯 Key Sections

### Hero Section
- Personal introduction
- Professional tagline
- Call-to-action buttons

### Skills & Technologies
- Categorized skill display
- Technology tags
- Visual organization

### Professional Experience
- Timeline of work experience
- Company details and roles
- Technologies used in each role

### Projects Showcase
- Featured projects
- Open source contributions
- Hackathon projects

### Blog
- Technical tutorials
- Industry insights
- Personal experiences

## 🔧 Configuration

### Site Configuration (`docusaurus.config.ts`)

- **Site Metadata**: Title, description, URLs
- **Navigation**: Menu items and links
- **Footer**: Social links and copyright
- **Theme**: Colors and styling options

### Sidebar Configuration (`sidebars.ts`)

- **Documentation**: About page structure
- **Navigation**: Page organization

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🌙 Dark Mode

Built-in dark/light mode toggle with:
- Automatic theme detection
- Manual theme switching
- Persistent theme preference

## 🚀 Deployment

### GitHub Pages

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

### Other Platforms

- **Netlify**: Connect your repository and set build command
- **Vercel**: Import your repository and deploy
- **AWS S3**: Upload build files to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: parashar.gawande@example.com
- **LinkedIn**: [parashargawande](https://linkedin.com/in/parashargawande)
- **GitHub**: [parashargawande](https://github.com/parashargawande)

---

*Built with ❤️ using Docusaurus*
