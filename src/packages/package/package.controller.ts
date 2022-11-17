import { Controller, Get } from '@nestjs/common';
import { exec } from 'child_process';
import { type } from 'os';
import { stderr, stdout } from 'process';
@Controller('package')
export class PackageController {
  frameworks = [
    {
      name: 'React',
      id: 1,
    },
    {
      name: 'React',
      id: 1,
    },
    {
      name: 'React',
      id: 1,
    },
    {
      name: 'React',
      id: 1,
    },
    {
      name: 'React',
      id: 1,
    },
  ];
  @Get()
  greeting(): string {
    exec('ls -la', (error, stdout, stderr) => {
      if (error) {
        console.log(error);
      } else if (stderr) {
        console.log(stderr);
      }

      console.log(stdout);
    });
    return 'hello user';
  }

  // @Get('frameworks')
  // getAllFrameworks(): string[] {}
}
