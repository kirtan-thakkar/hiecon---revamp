import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const INPUT_DIR = path.resolve("apps/web/public");
const OUTPUT_DIR = path.resolve("apps/web/public-optimized");

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
]);

let originalTotal = 0;
let optimizedTotal = 0;
let convertedCount = 0;
let copiedCount = 0;
let failedCount = 0;

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / Math.pow(1024, index)).toFixed(2)} ${units[index]}`;
}

async function processDirectory(inputDir, outputDir) {
  await fs.mkdir(outputDir, { recursive: true });

  const entries = await fs.readdir(inputDir, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const inputPath = path.join(inputDir, entry.name);
    const outputPath = path.join(outputDir, entry.name);

    // Recursively preserve folder structure
    if (entry.isDirectory()) {
      await processDirectory(inputPath, outputPath);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    const originalStats = await fs.stat(inputPath);

    originalTotal += originalStats.size;

    // Convert PNG / JPG / JPEG to WebP
    if (IMAGE_EXTENSIONS.has(extension)) {
      const filenameWithoutExtension = path.basename(
        entry.name,
        extension
      );

      const webpOutputPath = path.join(
        outputDir,
        `${filenameWithoutExtension}.webp`
      );

      try {
        await sharp(inputPath)
          .rotate()
          .resize({
            width: 2400,
            height: 2400,
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({
            quality: 88,
            effort: 6,
          })
          .toFile(webpOutputPath);

        const optimizedStats = await fs.stat(webpOutputPath);

        optimizedTotal += optimizedStats.size;
        convertedCount++;

        const reduction =
          ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);

        console.log(
          `✓ ${entry.name} → ${filenameWithoutExtension}.webp`
        );

        console.log(
          `  ${formatBytes(originalStats.size)} → ${formatBytes(
            optimizedStats.size
          )} (${reduction}% smaller)`
        );
      } catch (error) {
        failedCount++;

        console.error(`✗ Failed: ${inputPath}`);
        console.error(error);
      }

      continue;
    }

    // Copy all non-converted files unchanged
    // SVG, GIF, WebP, videos, PDFs, etc.
    await fs.copyFile(inputPath, outputPath);

    optimizedTotal += originalStats.size;
    copiedCount++;

    console.log(`→ Copied unchanged: ${entry.name}`);
  }
}

console.log("\nStarting image optimization...\n");
console.log(`Input:  ${INPUT_DIR}`);
console.log(`Output: ${OUTPUT_DIR}\n`);

await processDirectory(INPUT_DIR, OUTPUT_DIR);

const totalReduction =
  originalTotal > 0
    ? ((1 - optimizedTotal / originalTotal) * 100).toFixed(1)
    : 0;

console.log("\n========================================");
console.log("          OPTIMIZATION COMPLETE");
console.log("========================================\n");

console.log(`Converted images: ${convertedCount}`);
console.log(`Copied files:      ${copiedCount}`);
console.log(`Failed:            ${failedCount}`);

console.log("\nSize comparison:");
console.log(`Before: ${formatBytes(originalTotal)}`);
console.log(`After:  ${formatBytes(optimizedTotal)}`);
console.log(`Saved:  ${totalReduction}%`);

console.log(
  "\nYour original apps/web/public folder was NOT modified."
);