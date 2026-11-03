import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(0.1, 0.1, 0.12);
  const accentColor = rgb(0.4, 0.2, 0.7);
  const secondaryColor = rgb(0.3, 0.3, 0.35);
  const lineColor = rgb(0.7, 0.7, 0.75);

  const margin = 48;

  // Helper function to create a page
  let currentPage = pdfDoc.addPage([595.28, 841.89]); // A4
  let { width, height } = currentPage.getSize();
  const contentWidth = width - margin * 2;
  let y = height - 44;

  const checkPageBreak = (neededSpace) => {
    if (y - neededSpace < margin) {
      currentPage = pdfDoc.addPage([595.28, 841.89]);
      y = height - 44;
    }
  };

  const drawSectionHeading = (title) => {
    checkPageBreak(30);
    y -= 10;
    currentPage.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 10.5,
      font: fontBold,
      color: accentColor,
    });
    y -= 5;
    currentPage.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.8,
      color: lineColor,
    });
    y -= 11;
  };

  const drawBullet = (text, indent = 12) => {
    checkPageBreak(20);
    currentPage.drawText("•", {
      x: margin + indent - 8,
      y,
      size: 9.5,
      font: fontBold,
      color: primaryColor,
    });

    const words = text.split(" ");
    let line = "";
    const maxWidth = contentWidth - indent;

    for (const word of words) {
      const testLine = line + (line ? " " : "") + word;
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 9);
      if (testWidth > maxWidth) {
        currentPage.drawText(line, {
          x: margin + indent,
          y,
          size: 9,
          font: fontRegular,
          color: primaryColor,
        });
        y -= 11.5;
        checkPageBreak(15);
        line = word;
      } else {
        line = testLine;
      }
    }
    if (line) {
      currentPage.drawText(line, {
        x: margin + indent,
        y,
        size: 9,
        font: fontRegular,
        color: primaryColor,
      });
      y -= 11.5;
    }
  };

  // Header - Name
  const name = "HARINI A K";
  const nameWidth = fontBold.widthOfTextAtSize(name, 22);
  currentPage.drawText(name, {
    x: (width - nameWidth) / 2,
    y,
    size: 22,
    font: fontBold,
    color: primaryColor,
  });

  y -= 18;

  // Contact line
  const contactText = "hariniak006@gmail.com   |   7902010306   |   LinkedIn   |   GitHub";
  const contactWidth = fontRegular.widthOfTextAtSize(contactText, 9.5);
  currentPage.drawText(contactText, {
    x: (width - contactWidth) / 2,
    y,
    size: 9.5,
    font: fontRegular,
    color: secondaryColor,
  });

  y -= 12;

  // CAREER OBJECTIVE
  drawSectionHeading("Career Objective");
  const objText = "Motivated Computer Science undergraduate with hands-on project experience in Java, Python, and Web Development. Interested in applying technical skills to collaborative academic and industry projects.";
  const words = objText.split(" ");
  let line = "";
  for (const word of words) {
    const testLine = line + (line ? " " : "") + word;
    if (fontRegular.widthOfTextAtSize(testLine, 9) > contentWidth) {
      currentPage.drawText(line, { x: margin, y, size: 9, font: fontRegular, color: primaryColor });
      y -= 12;
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) {
    currentPage.drawText(line, { x: margin, y, size: 9, font: fontRegular, color: primaryColor });
    y -= 12;
  }

  // EDUCATION
  drawSectionHeading("Education");
  currentPage.drawText("Amrita Vishwa Vidyapeetham, Coimbatore", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const eduYear = "2023 – 2027";
  currentPage.drawText(eduYear, {
    x: width - margin - fontBold.widthOfTextAtSize(eduYear, 9.5),
    y,
    size: 9.5,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 11.5;
  currentPage.drawText("Bachelor of Technology in Computer Science Engineering", {
    x: margin,
    y,
    size: 9,
    font: fontOblique,
    color: primaryColor,
  });
  const cgpaText = "CGPA: 6.52";
  currentPage.drawText(cgpaText, {
    x: width - margin - fontBold.widthOfTextAtSize(cgpaText, 9),
    y,
    size: 9,
    font: fontBold,
    color: accentColor,
  });
  y -= 13;

  // SKILLS
  drawSectionHeading("Skills");
  const skillsList = [
    { label: "Programming Languages", val: "Java, Python, C" },
    { label: "Frontend", val: "HTML, CSS, React.js" },
    { label: "Backend", val: "Node.js, Express.js, FastAPI" },
    { label: "Databases", val: "MySQL, PostgreSQL" },
    { label: "Tools", val: "Git, Github, VSCode" },
  ];
  for (const s of skillsList) {
    currentPage.drawText(`${s.label} — `, { x: margin, y, size: 9, font: fontBold, color: primaryColor });
    const labelW = fontBold.widthOfTextAtSize(`${s.label} — `, 9);
    currentPage.drawText(s.val, { x: margin + labelW, y, size: 9, font: fontRegular, color: secondaryColor });
    y -= 11.5;
  }

  // PROJECTS
  drawSectionHeading("Projects");

  // Project 1: Medical Hallucination Detection
  currentPage.drawText("Medical Hallucination Detection and Classification using Machine Learning", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const p1Date = "11/2025 – Present";
  currentPage.drawText(p1Date, {
    x: width - margin - fontBold.widthOfTextAtSize(p1Date, 9),
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 11.5;
  drawBullet("Analyzed hallucinations in Large Language Models for healthcare-related queries using structured evaluation methods.");
  drawBullet("Conducted in-depth literature review of recent research papers and identified key research gaps in medical AI reliability.");
  drawBullet("Evaluated model outputs based on factual accuracy, consistency, and domain-specific correctness.");
  drawBullet("Explored prompt engineering and fact-checking approaches to improve trustworthiness of AI-generated medical responses.");

  // Project 2: Project Tracker
  y -= 3;
  currentPage.drawText("Project Tracker, Full Stack Web Application", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 11.5;
  drawBullet("Built a multi-view project management tool with Kanban, List, and Timeline views.");
  drawBullet("Implemented custom drag-and-drop functionality with smooth UI interactions.");
  drawBullet("Designed responsive frontend using React and TypeScript.");
  drawBullet("Optimized state management and rendering for improved performance.");
  currentPage.drawText("Live: https://project-tracker-owa1.vercel.app/", {
    x: margin + 12,
    y,
    size: 8.5,
    font: fontOblique,
    color: accentColor,
  });
  y -= 13;

  // Project 3: AI-Based Attendance System
  currentPage.drawText("AI-Based Attendance System Using Facial Recognition", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 11.5;
  drawBullet("Developed a full-stack web application with React frontend and Python-based face recognition backend.");
  drawBullet("Integrated REST APIs for real-time attendance updates and dashboard visualization.");
  drawBullet("Automated student tracking system, reducing manual attendance effort.");

  // Project 4: Golf Charity Subscription Platform
  y -= 3;
  checkPageBreak(65);
  currentPage.drawText("Golf Charity Subscription Platform", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 11.5;
  drawBullet("Developed a full-stack web application using Next.js and Supabase that enables users to manage golf scores, subscribe to a platform, and participate in a monthly draw system integrated with charity selection.");
  drawBullet("Implemented secure authentication, route protection, and an admin panel for system management.");
  currentPage.drawText("Live: https://golf-charity-platform-1gmj.vercel.app/", {
    x: margin + 12,
    y,
    size: 8.5,
    font: fontOblique,
    color: accentColor,
  });
  y -= 13;

  // Project 5: AI-Enabled Crop Disease Diagnosis
  checkPageBreak(50);
  currentPage.drawText("AI-Enabled Crop Disease Diagnosis & Severity Detection System", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 11.5;
  drawBullet("Developed REST APIs using FastAPI for AI model inference and severity classification (~96% accuracy).");
  drawBullet("Designed backend with PostgreSQL and implemented asynchronous processing using Celery & Redis.");
  drawBullet("Built scalable architecture to handle multiple prediction requests efficiently.");

  // TRAININGS / CERTIFICATIONS
  drawSectionHeading("Trainings / Certifications");
  currentPage.drawText("Data Science", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const tDate = "05/2024 – Present";
  currentPage.drawText(tDate, {
    x: width - margin - fontBold.widthOfTextAtSize(tDate, 9),
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 11;
  currentPage.drawText("IITM BS Degree, Virtual", {
    x: width - margin - fontRegular.widthOfTextAtSize("IITM BS Degree, Virtual", 8.5),
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 13;

  // HACKATHONS
  drawSectionHeading("Hackathons");
  currentPage.drawText("Participant – ByteVerse 7.0 Hackathon by NIT Patna,", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const hDate = "04/2025";
  currentPage.drawText(hDate, {
    x: width - margin - fontBold.widthOfTextAtSize(hDate, 9),
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 11;
  currentPage.drawText("Python, Streamlit, OpenAI API, HTML", {
    x: margin,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 11;
  drawBullet("Developed an AI-powered web app promoting mental wellness through conversational AI, mood tracking, and interactive games within a limited time frame as part of a collaborative team effort.");
  drawBullet("Contributed to front-end/back-end, enhancing problem-solving and time management skills.");

  // EXTRA CURRICULAR ACTIVITIES
  drawSectionHeading("Extra Curricular Activities");
  drawBullet("Actively participated in NSS for 2 years, contributing to community service and social welfare programs.");
  drawBullet("Class Representative 3rd year");

  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, 'Harini_A_K_Resume.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log("Updated Resume PDF generated successfully at:", outPath);
}

createResume().catch(console.error);
