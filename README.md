# Skymaster QC — iPad testing app

Installable, offline-capable inspection app for Pedestal and Tie-Back / HLL Support QC.

## Deploy with GitHub Pages
1. Extract the provided `Skymaster_QC_iPad_Installable_Web_App.zip` on your computer.
2. Upload **the files inside the ZIP** into the root of this repository (`index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`). Keep original filenames.
3. Open **Settings > Pages**. In **Build and deployment**, select **Deploy from a branch**, `main`, `/(root)`, then **Save**.
4. Open `https://highriseaccess.github.io/skymaster-qc-app/` on the iPad in Safari, then choose **Share > Add to Home Screen**.

**Privacy:** GitHub Pages is public. Never commit inspection records, project information, signatures, photos, exported JSON files, or PDF reports to this repository. All actual QC data should stay on your device or a private storage system.

**Testing:** Verify PDF export and offline use on the iPad before using this for real inspections.
