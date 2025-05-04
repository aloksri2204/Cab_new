// This file is a simple entry point to run the AkhileshCab website application
// It forwards execution to the simple-site server

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting AkhileshCab website (simple version)...');

// Run the server from the simple-site directory
const serverProcess = spawn('node', ['server/server.js'], {
  cwd: path.join(__dirname, 'simple-site'),
  stdio: 'inherit'
});

serverProcess.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

// Handle termination signals
process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully...');
  serverProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Shutting down gracefully...');
  serverProcess.kill('SIGTERM');
});