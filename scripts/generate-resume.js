import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(0.1, 0.1, 0.15);
  const accentColor = rgb(0.35, 0.2, 0.7); // Purple tint
  const secondaryColor = rgb(0.35, 0.35, 0.4);
  const lineColor = rgb(0.75, 0.75, 0.8);

  let y = height - 42;
  const margin = 48;
  const contentWidth = width - margin * 2;

  // Header - Name
  const name = "HARINI A K";
  const nameWidth = fontBold.widthOfTextAtSize(name, 22);
  page.drawText(name, {
    x: (width - nameWidth) / 2,
    y,
    size: 22,
    font: fontBold,
    color: primaryColor,
  });

  y -= 18;

  // Contact line
  const contactText = "hariniakk006@gmail.com   |   +91 7902010306   |   LinkedIn   |   GitHub";
  const contactWidth = fontRegular.widthOfTextAtSize(contactText, 9.5);
  page.drawText(contactText, {
    x: (width - contactWidth) / 2,
    y,
    size: 9.5,
    font: fontRegular,
    color: secondaryColor,
  });

  y -= 14;

  const drawSectionHeading = (title) => {
    y -= 12;
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 11,
      font: fontBold,
      color: accentColor,
    });
    y -= 5;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.8,
      color: lineColor,
    });
    y -= 12;
  };

  const drawBullet = (text, indent = 12) => {
    page.drawText("•", {
      x: margin + indent - 8,
      y,
      size: 10,
      font: fontBold,
      color: primaryColor,
    });
    
    // Simple text wrap
    const words = text.split(" ");
    let line = "";
    const maxWidth = contentWidth - indent;

    for (const word of words) {
      const testLine = line + (line ? " " : "") + word;
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 9);
      if (testWidth > maxWidth) {
        page.drawText(line, {
          x: margin + indent,
          y,
          size: 9,
          font: fontRegular,
          color: primaryColor,
        });
        y -= 11.5;
        line = word;
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, {
        x: margin + indent,
        y,
        size: 9,
        font: fontRegular,
        color: primaryColor,
      });
      y -= 11.5;
    }
  };

  // CAREER OBJECTIVE
  drawSectionHeading("Career Objective");
  const objText = "Motivated Computer Science undergraduate with hands-on project experience in Java, Python, and Web Development. Interested in applying technical skills to collaborative academic and industry projects.";
  const words = objText.split(" ");
  let line = "";
  for (const word of words) {
    const testLine = line + (line ? " " : "") + word;
    if (fontRegular.widthOfTextAtSize(testLine, 9) > contentWidth) {
      page.drawText(line, { x: margin, y, size: 9, font: fontRegular, color: primaryColor });
      y -= 12;
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, { x: margin, y, size: 9, font: fontRegular, color: primaryColor });
    y -= 12;
  }

  // EDUCATION
  drawSectionHeading("Education");
  page.drawText("Amrita Vishwa Vidyapeetham, Coimbatore", {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: primaryColor,
  });
  const eduYear = "2023 – 2027";
  page.drawText(eduYear, {
    x: width - margin - fontBold.widthOfTextAtSize(eduYear, 9.5),
    y,
    size: 9.5,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 12;
  page.drawText("Bachelor of Technology (B.Tech) in Computer Science Engineering", {
    x: margin,
    y,
    size: 9,
    font: fontOblique,
    color: primaryColor,
  });
  const cgpaText = "CGPA: 6.52";
  page.drawText(cgpaText, {
    x: width - margin - fontBold.widthOfTextAtSize(cgpaText, 9),
    y,
    size: 9,
    font: fontBold,
    color: accentColor,
  });
  y -= 14;

  // SKILLS
  drawSectionHeading("Skills");
  const skillsList = [
    { label: "Programming Languages", val: "Java, Python, C, HTML, CSS, SQL" },
    { label: "Frameworks & Libraries", val: "ReactJS, Node.js, Scikit-learn, Pandas, NumPy, Matplotlib" },
    { label: "Tools & IDEs", val: "VS Code, Code Blocks, Eclipse" },
  ];
  for (const s of skillsList) {
    page.drawText(`${s.label}: `, { x: margin, y, size: 9, font: fontBold, color: primaryColor });
    const labelW = fontBold.widthOfTextAtSize(`${s.label}: `, 9);
    page.drawText(s.val, { x: margin + labelW, y, size: 9, font: fontRegular, color: secondaryColor });
    y -= 12.5;
  }

  // PROJECTS
  drawSectionHeading("Projects");
  
  // Project 1
  page.drawText("Adaptive Traffic Signal Control Using Fog Computing & RL", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 12;
  drawBullet("Designed an intelligent traffic signal control system integrating Artificial Neural Network (ANN) and Proximal Policy Optimization (PPO) for real-time adaptive decision-making.");
  drawBullet("Implemented and tested the model in the SUMO simulator with TraCI communication, achieving over 99% reduction in waiting time and time loss compared to fixed-time control.");

  // Project 2
  y -= 3;
  page.drawText("ATM Transaction System", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 12;
  drawBullet("Collaborated in a team to develop an ATM transaction system using Python. Implemented functionalities including balance checking, withdrawal, and deposit using a linked list.");

  // Project 3
  y -= 3;
  page.drawText("Banking Systems", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 12;
  drawBullet("Designed and developed a modular banking system in Java using OOP and key data structures, focusing on algorithmic design, runtime efficiency, and user experience.");

  // HACKATHONS
  drawSectionHeading("Hackathons & Competitions");
  page.drawText("Participant – ByteVerse 7.0 Hackathon by NIT Patna", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const hackDate = "04/2025";
  page.drawText(hackDate, {
    x: width - margin - fontBold.widthOfTextAtSize(hackDate, 9),
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 11;
  page.drawText("Technologies: Python, Streamlit, OpenAI API, HTML", {
    x: margin,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 11;
  drawBullet("Developed an AI-powered web app promoting mental wellness through conversational AI, mood tracking, and interactive games within a limited time frame as part of a collaborative team effort.");
  drawBullet("Contributed to front-end and back-end integration, enhancing problem-solving and time management skills.");

  // TRAININGS / CERTIFICATIONS
  drawSectionHeading("Trainings & Continuous Learning");
  page.drawText("Data Science – IIT Madras BS Degree Programme", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const trainDate = "05/2024 – Present";
  page.drawText(trainDate, {
    x: width - margin - fontBold.widthOfTextAtSize(trainDate, 9),
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 11;
  page.drawText("Mode: Virtual / Online Foundational Learning", {
    x: margin,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 14;

  // EXTRA CURRICULAR ACTIVITIES
  drawSectionHeading("Extra-Curricular Activities & Community Service");
  page.drawText("National Service Scheme (NSS)", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 11;
  drawBullet("Actively participated in NSS for 2 years, contributing to community service and social welfare programs.");

  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, 'Harini_A_K_Resume.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log("Resume PDF generated successfully at:", outPath);
}

createResume().catch(console.error);
