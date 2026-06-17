import fs from 'fs';
import path from 'path';

const configDir = 'e:\\Projects-fullstack\\proj123\\design\\design-temp\\src\\modules\\registration\\config';
const files = fs.readdirSync(configDir).filter(f => f.endsWith('Config.js'));

const replacements = {
  'Users as UsersIcon': 'IconUsers as UsersIcon',
  'ShieldCheck': 'IconShieldCheck as ShieldCheck',
  'Gem': 'IconDiamond as Gem',
  'Headphones': 'IconHeadphones as Headphones',
  'User': 'IconUser as User',
  'Gift': 'IconGift as Gift',
  'Mars': 'IconGenderMale as Mars',
  'Venus': 'IconGenderFemale as Venus',
  'Briefcase': 'IconBriefcase as Briefcase',
  'Contact': 'IconAddressBook as Contact',
  'GraduationCap': 'IconSchool as GraduationCap',
  'BookOpen': 'IconBook as BookOpen',
  'Ruler': 'IconRuler as Ruler',
  'Scale': 'IconWeight as Scale',
  'Heart': 'IconHeart as Heart',
  'Globe': 'IconLanguage as Globe', // In step8, Globe is used for Languages. In step13, it's Citizenship. Let's handle manually or via regex carefully.
  'UserCheck': 'IconUserCheck as UserCheck',
  'Utensils': 'IconToolsKitchen2 as Utensils',
  'Activity': 'IconActivity as Activity',
  'Cigarette': 'IconSmoking as Cigarette',
  'Wine': 'IconGlassFull as Wine',
  'Gamepad2': 'IconDeviceGamepad2 as Gamepad2',
  'FileText': 'IconFileText as FileText',
  'Home': 'IconHome as Home',
  'Users': 'IconUsers as Users',
  'MapPin': 'IconMapPin as MapPin',
  'Map': 'IconMap as Map',
  'Baby': 'IconBabyCarriage as Baby',
  'PawPrint': 'IconPaw as PawPrint',
  'Calendar': 'IconCalendar as Calendar',
  'Flame': 'IconSmoking as Flame', // step13
  'Coffee': 'IconGlassFull as Coffee', // step13
  'Languages': 'IconLanguage as Languages', // step13
};

for (const file of files) {
  const filePath = path.join(configDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Specific case for step13 Globe vs step8 Globe
  if (file === 'step13Config.js') {
    content = content.replace("import { Utensils, Activity, Flame, Coffee, Languages, Globe, ShieldCheck, Gem, Headphones, Users as UsersIcon } from 'lucide-react';", 
    "import { IconToolsKitchen2 as Utensils, IconActivity as Activity, IconSmoking as Flame, IconGlassFull as Coffee, IconLanguage as Languages, IconWorld as Globe, IconShieldCheck as ShieldCheck, IconDiamond as Gem, IconHeadphones as Headphones, IconUsers as UsersIcon } from '@tabler/icons-react';");
  } else if (file === 'step8Config.js') {
    content = content.replace("import { Ruler, Scale, User, Heart, Globe, UserCheck, ShieldCheck, Gem, Headphones, Users as UsersIcon } from 'lucide-react';",
    "import { IconRuler as Ruler, IconWeight as Scale, IconUser as User, IconHeart as Heart, IconLanguage as Globe, IconUserCheck as UserCheck, IconShieldCheck as ShieldCheck, IconDiamond as Gem, IconHeadphones as Headphones, IconUsers as UsersIcon } from '@tabler/icons-react';");
  } else if (file === 'step7Config.js') {
    content = content.replace("import { Briefcase, Contact, GraduationCap, BookOpen, User, Users as UsersIcon, ShieldCheck, Gem, Headphones } from 'lucide-react';",
    "import { IconBriefcase as Briefcase, IconAddressBook as Contact, IconSchool as GraduationCap, IconBook as BookOpen, IconUser as User, IconMan as FatherIcon, IconWoman as MotherIcon, IconUsers as UsersIcon, IconShieldCheck as ShieldCheck, IconDiamond as Gem, IconHeadphones as Headphones } from '@tabler/icons-react';");
    content = content.replace("id: \"fatherProfession\",\n      title: \"Father's\\nProfession\",\n      icon: User,", "id: \"fatherProfession\",\n      title: \"Father's\\nProfession\",\n      icon: FatherIcon,");
    content = content.replace("id: \"motherProfession\",\n      title: \"Mother's\\nProfession\",\n      icon: User,", "id: \"motherProfession\",\n      title: \"Mother's\\nProfession\",\n      icon: MotherIcon,");
  } else if (content.includes('lucide-react')) {
    // Generic replacement
    const match = content.match(/import {([^}]+)} from 'lucide-react';/);
    if (match) {
      const imports = match[1].split(',').map(s => s.trim());
      const newImports = imports.map(imp => {
        if (replacements[imp]) return replacements[imp];
        return imp;
      });
      content = content.replace(match[0], `import { ${newImports.join(', ')} } from '@tabler/icons-react';`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Icons updated');
