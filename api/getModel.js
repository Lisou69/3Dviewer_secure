import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const filePath = join(process.cwd(), 'private', 'model-8x7W92tA.glb');
  const fileBuffer = readFileSync(filePath);

  res.setHeader('Content-Type', 'model/gltf-binary');
  res.setHeader('Content-Disposition', 'inline; filename="model.glb"');
  res.send(fileBuffer);
}
