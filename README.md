# SynthChar - Glass Batch Calculator and Visualization Tool

## Overview
SynthChar is a comprehensive web application for glass batch calculations and advanced visualizations. It helps researchers and glass manufacturers formulate and analyze glass compositions with interactive tools.

## Features
- Batch Calculator: Calculate precise glass formulations
- Advanced Visualization: Interactive 2D and 3D visualizations
- Composition Charts: Bar, pie, and radar charts
- Ternary Plots: Visualize three-component relationships
- 3D Structure Viewer: Explore glass atomic structures
- Property Maps: Analyze composition-property relationships

## Deployment on Netlify

### Automatic Deployment
1. Fork or clone this repository
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Use the following build settings:
   - Build command: `npm run netlify-build`
   - Publish directory: `out`
6. Click "Deploy site"

### Manual Deployment
1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to Netlify using the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

## Environment Variables
Create a `.env.local` file in the root directory with the following variables if needed:

```
# Add any required environment variables here
```

## Development

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
- `/src/app`: Next.js app router pages
- `/src/components`: React components
- `/src/contexts`: React context providers
- `/src/lib`: Utility functions
- `/src/types`: TypeScript type definitions
- `/public`: Static assets
- `/netlify`: Netlify configuration files

## Technologies Used
- Next.js
- React
- TypeScript
- Tailwind CSS
- Three.js for 3D visualization
- Recharts for data visualization
- Netlify for deployment

## License
This project is licensed under the MIT License - see the LICENSE file for details.
