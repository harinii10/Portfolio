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

  // PAGE 1
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page1.getSize();
  const contentWidth = width - margin * 2;
  let y = height - 44;

  const drawSectionHeading = (page, title) => {
    y -= 10;
    page.drawText(title, {
      x: margin,
      y,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.8,
      color: lineColor,
    });
    y -= 11;
  };

  const drawBullet = (page, text, indent = 12) => {
    page.drawText("•", {
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
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.8);
      if (testWidth > maxWidth) {
        page.drawText(line, {
          x: margin + indent,
          y,
          size: 8.8,
          font: fontRegular,
          color: primaryColor,
        });
        y -= 11;
        line = word;
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, {
        x: margin + indent,
        y,
        size: 8.8,
        font: fontRegular,
        color: primaryColor,
      });
      y -= 11;
    }
  };

  // Header - Name
  const name = "HARINI A K";
  page1.drawText(name, {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: primaryColor,
  });

  y -= 18;

  // Contact line
  const contactText = "hariniak006@gmail.com       7902010306";
  page1.drawText(contactText, {
    x: margin,
    y,
    size: 9.5,
    font: fontRegular,
    color: secondaryColor,
  });

  y -= 14;

  // Career Objective
  drawSectionHeading(page1, "Career Objective");
  const objText = "Final-year Computer Science student with experience in Java, Python, full-stack development, and AI-powered applications. Skilled in building scalable backend systems, databases, and modern web applications. Seeking an opportunity to contribute to innovative software engineering projects while continuously learning emerging technologies.";
  const words = objText.split(" ");
  let line = "";
  for (const word of words) {
    const testLine = line + (line ? " " : "") + word;
    if (fontRegular.widthOfTextAtSize(testLine, 9) > contentWidth) {
      page1.drawText(line, { x: margin, y, size: 9, font: fontRegular, color: primaryColor });
      y -= 11.5;
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page1.drawText(line, { x: margin, y, size: 9, font: fontRegular, color: primaryColor });
    y -= 12;
  }

  // Education
  drawSectionHeading(page1, "Education");
  page1.drawText("Bachelor of Technology in Computer Science Engineering,", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const eduYear = "2023 – 2027";
  page1.drawText(eduYear, {
    x: width - margin - fontBold.widthOfTextAtSize(eduYear, 9.5),
    y,
    size: 9.5,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 11.5;
  page1.drawText("Amrita Vishwa Vidyapeetham, Coimbatore", {
    x: margin,
    y,
    size: 9,
    font: fontRegular,
    color: secondaryColor,
  });
  const eduCity = "Coimbatore";
  page1.drawText(eduCity, {
    x: width - margin - fontRegular.widthOfTextAtSize(eduCity, 9),
    y,
    size: 9,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 11.5;
  const cgpaText = "CGPA: 6.51";
  page1.drawText(cgpaText, {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: primaryColor,
  });
  y -= 14;

  // Skills (2-column layout matching OCR)
  drawSectionHeading(page1, "Skills");
  const skillsYStart = y;
  
  // Left column: Programming Languages, Backend, Tools
  page1.drawText("Programming Languages", { x: margin, y, size: 9, font: fontBold, color: primaryColor });
  y -= 11;
  page1.drawText("Java, Python, C", { x: margin, y, size: 8.8, font: fontRegular, color: secondaryColor });
  y -= 13;

  page1.drawText("Backend", { x: margin, y, size: 9, font: fontBold, color: primaryColor });
  y -= 11;
  page1.drawText("Node.js, Express.js, FastAPI, Redis, Celery", { x: margin, y, size: 8.8, font: fontRegular, color: secondaryColor });
  y -= 13;

  page1.drawText("Tools", { x: margin, y, size: 9, font: fontBold, color: primaryColor });
  y -= 11;
  page1.drawText("Git, Github, VSCode", { x: margin, y, size: 8.8, font: fontRegular, color: secondaryColor });
  
  // Right column: Frontend, Databases
  let rightY = skillsYStart;
  const col2X = margin + 240;

  page1.drawText("Frontend", { x: col2X, y: rightY, size: 9, font: fontBold, color: primaryColor });
  rightY -= 11;
  page1.drawText("HTML, CSS, React.js, Next.js, TypeScript", { x: col2X, y: rightY, size: 8.8, font: fontRegular, color: secondaryColor });
  rightY -= 13;

  page1.drawText("Databases", { x: col2X, y: rightY, size: 9, font: fontBold, color: primaryColor });
  rightY -= 11;
  page1.drawText("MySQL, PostgreSQL, Supabase", { x: col2X, y: rightY, size: 8.8, font: fontRegular, color: secondaryColor });

  y = Math.min(y, rightY) - 15;

  // Projects
  drawSectionHeading(page1, "Projects");

  // Project 1
  page1.drawText("Adaptive Traffic Signal Control Using Fog Computing & RL, ", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const p1Len = fontBold.widthOfTextAtSize("Adaptive Traffic Signal Control Using Fog Computing & RL, ", 9.5);
  page1.drawText("Python, PPO, ANN, SUMO, TraCI", {
    x: margin + p1Len,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 11;
  drawBullet(page1, "Designed an intelligent traffic signal control system integrating Artificial Neural Network (ANN) and Proximal Policy Optimization (PPO) for real-time adaptive decision-making.");
  drawBullet(page1, "Implemented and evaluated the model in SUMO simulator using TraCI, achieving over 99% reduction in vehicle waiting time compared to fixed-time signal control");

  // Project 2
  y -= 3;
  page1.drawText("AI-Enabled Crop Disease Diagnosis & Severity Detection System, ", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const p2Len = fontBold.widthOfTextAtSize("AI-Enabled Crop Disease Diagnosis & Severity Detection System, ", 9.5);
  page1.drawText("FastAPI, PostgreSQL, Redis, Celery, PyTorch", {
    x: margin + p2Len,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 11;
  drawBullet(page1, "Developed REST APIs using FastAPI for AI model inference and severity classification (~96% accuracy).");
  drawBullet(page1, "Designed backend with PostgreSQL and implemented asynchronous processing using Celery & Redis.");
  drawBullet(page1, "Built scalable architecture to handle multiple prediction requests efficiently.");

  // Project 3
  y -= 3;
  page1.drawText("Golf Charity Subscription Platform, ", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const p3Len = fontBold.widthOfTextAtSize("Golf Charity Subscription Platform, ", 9.5);
  page1.drawText("Full Stack", {
    x: margin + p3Len,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 11;
  drawBullet(page1, "Built a full-stack subscription platform with Next.js and Supabase featuring golf score tracking, a monthly charity draw system, and an admin panel for end-to-end management");
  drawBullet(page1, "Designed a 5-table PostgreSQL schema and implemented core logic including a score replacement algorithm, random draw matching, and session-based route protection");
  page1.drawText("• Live: https://golf-charity-platform-1gmj.vercel.app/", {
    x: margin + 4,
    y,
    size: 8.5,
    font: fontRegular,
    color: accentColor,
  });
  y -= 12;

  // Project 4
  page1.drawText("Project Tracker, ", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const p4Len = fontBold.widthOfTextAtSize("Project Tracker, ", 9.5);
  page1.drawText("React, TypeScript", {
    x: margin + p4Len,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 11;
  drawBullet(page1, "Built a multi-view project management UI in React and TypeScript with custom drag-and-drop (native pointer events, no libraries), virtual scrolling for 500+ tasks, and instant Kanban/List/Gantt view switching over shared state");
  drawBullet(page1, "Implemented URL-synced filters for shareable views, simulated real-time collaboration indicators via mock WebSocket, and achieved a Lighthouse performance score of 85+");
  page1.drawText("• Live: https://project-tracker-owa1.vercel.app/", {
    x: margin + 4,
    y,
    size: 8.5,
    font: fontRegular,
    color: accentColor,
  });

  // PAGE 2
  const page2 = pdfDoc.addPage([595.28, 841.89]);
  y = height - 44;

  // HACKATHONS
  drawSectionHeading(page2, "HACKATHONS");
  page2.drawText("Participant – ByteVerse 7.0 Hackathon by NIT Patna,", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const hDate = "04/2025 – 04/2025";
  page2.drawText(hDate, {
    x: width - margin - fontBold.widthOfTextAtSize(hDate, 9),
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 11;
  page2.drawText("Python, Streamlit, OpenAI API, HTML", {
    x: margin,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 11;
  drawBullet(page2, "Developed an AI-powered web app promoting mental wellness through conversational AI, mood tracking, and interactive games within a limited time frame as part of a collaborative team effort.");
  drawBullet(page2, "Contributed to front-end/back-end, enhancing problem-solving and time management skills.");

  y -= 14;

  // Extra Curricular Activities
  drawSectionHeading(page2, "Extra Curricular Activities");
  drawBullet(page2, "Actively participated in NSS for 2 years, contributing to community service and social welfare programs.");
  drawBullet(page2, "Elected Class Representative (3rd Year), coordinating communication between faculty and 60+ students.");

  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, 'Harini_A_K_Resume.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log("Updated 2-page Resume PDF successfully generated at:", outPath);
}

createResume().catch(console.error);
