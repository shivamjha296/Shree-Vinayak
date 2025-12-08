import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public/images');
const CAROUSEL_DIR = path.join(PUBLIC_DIR, 'carousel-home');

async function optimizeImage(filePath, outputDir, maxWidth = 1200) {
    try {
        const filename = path.basename(filePath);
        const nameWithoutExt = path.parse(filename).name;
        const outputPath = path.join(outputDir, `${nameWithoutExt}.webp`);

        // Skip if already exists (optional, but good for re-running)
        // await fs.access(outputPath).catch(() => {}); 

        await sharp(filePath)
            .resize({ width: maxWidth, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outputPath);

        console.log(`Optimized: ${filename} -> ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(`Error optimizing ${filePath}:`, error);
    }
}

async function main() {
    console.log('Starting image optimization...');

    // 1. Optimize main images
    try {
        const files = await fs.readdir(PUBLIC_DIR);
        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                await optimizeImage(path.join(PUBLIC_DIR, file), PUBLIC_DIR, 1200);
            }
        }
    } catch (err) {
        console.error("Error reading public/images:", err);
    }

    // 2. Optimize carousel images
    try {
        const carouselFiles = await fs.readdir(CAROUSEL_DIR);
        for (const file of carouselFiles) {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                await optimizeImage(path.join(CAROUSEL_DIR, file), CAROUSEL_DIR, 1920); // Larger for carousel
            }
        }
    } catch (err) {
        console.error("Error reading public/images/carousel-home:", err);
    }

    console.log('Image optimization complete!');
}

main();
