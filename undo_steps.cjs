const fs = require('fs');
const steps = ['Step07', 'Step08', 'Step09', 'Step10', 'Step11', 'Step12', 'Step13'];
steps.forEach(step => {
  const path = `src/modules/registration/pages/${step}/${step}.jsx`;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(
    'className="flex flex-col w-full h-full max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1050px] mx-auto lg:mx-0 lg:ml-2 mt-2 lg:mt-4 gap-[clamp(0.5rem,min(1.5vh,1vw),1rem)] justify-between"',
    'className="flex flex-col w-full h-full max-w-[600px] mx-auto lg:mx-0 lg:ml-2 mt-2 lg:mt-4 gap-[clamp(0.5rem,min(1.5vh,1vw),1rem)] justify-between"'
  );
  content = content.replace(
    'className="grid grid-cols-2 md:grid-cols-3 gap-[clamp(0.5rem,1.5vw,1rem)] xl:gap-[1.5rem] 2xl:gap-[2rem] w-full"',
    'className="grid grid-cols-2 md:grid-cols-3 gap-[clamp(0.5rem,1.5vw,1rem)] w-full"'
  );
  fs.writeFileSync(path, content, 'utf8');
  console.log('Undone ' + step);
});
