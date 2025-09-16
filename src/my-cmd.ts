import type { IJavaScriptRunContext } from '@jupyterlite/cockle';
import { ExitCode } from '@jupyterlite/cockle';

export async function run(context: IJavaScriptRunContext): Promise<number> {
  const { stdout } = context;
  const fs = context.fileSystem.FS

  stdout.write(`Hello from my command ${context.name}\n`);
  stdout.write(`cmd: ${fs.cwd()}\n`);

  const files = fs.readdir(fs.cwd());
  stdout.write(`Contents of cwd: ${files.join(' ')}\n`);

  return ExitCode.SUCCESS;
}
