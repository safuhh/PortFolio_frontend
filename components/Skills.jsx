'use client';
import { motion } from 'framer-motion';
import { 
  ReactIcon,
  NextjsIcon,
  JavascriptIcon,
  TypescriptIcon,
  NodejsIcon,
  ExpressjsIcon,
  MongodbIcon,
  ReduxIcon,
  TailwindIcon,
  BootstrapIcon,
  FramerMotionIcon,

  RestApiIcon,
  WebsocketsIcon,
  JwtIcon,
  MongooseIcon,
  Github,
  PostmanIcon,
  FigmaIcon,
  VercelIcon,
  NetlifyIcon,
  RagIcon,
  AwsIcon,
  CloudflareIcon,
  DockerIcon,
  AzureIcon
} from '@/components/Icons';

export default function Skills() {

  const groups = [
    {
      label: 'Frontend',
      skills: [
        { name: 'React.js', icon: ReactIcon },
        { name: 'Next.js', icon: NextjsIcon },
        { name: 'JavaScript', icon: JavascriptIcon },
        { name: 'TypeScript', icon: TypescriptIcon },
        { name: 'Redux Toolkit', icon: ReduxIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
        { name: 'Bootstrap 5', icon: BootstrapIcon },
        { name: 'Framer Motion', icon: FramerMotionIcon },

      ],
    },
    {
      label: 'Backend',
      skills: [
        { name: 'Node.js', icon: NodejsIcon },
        { name: 'Express.js', icon: ExpressjsIcon },
        { name: 'MongoDB', icon: MongodbIcon },
        { name: 'Mongoose', icon: MongooseIcon },
        { name: 'REST APIs', icon: RestApiIcon },
        { name: 'WebSockets', icon: WebsocketsIcon },
        { name: 'JWT Auth', icon: JwtIcon },
        { name: 'RAG System', icon: RagIcon },
      ],
    },
    {
      label: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: AwsIcon },
        { name: 'Cloudflare', icon: CloudflareIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'Azure', icon: AzureIcon },
      ],
    },
    {
      label: 'Tools & Design',
      skills: [
        { name: 'Git & GitHub', icon: Github },
        { name: 'Postman', icon: PostmanIcon },
        { name: 'Figma', icon: FigmaIcon },
        { name: 'Vercel', icon: VercelIcon },
        { name: 'Netlify', icon: NetlifyIcon },
      ],
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* Section Header */}
        <motion.div {...fadeUp} className="mb-14 sm:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6B6B6B]">
            Capabilities
          </span>
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#000000] tracking-tight mt-2">
            Technical Expertise
          </h2>
          <div className="w-12 h-[1px] bg-[#000000] mt-4" />
        </motion.div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {groups.map((group, groupIdx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: groupIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Group Label */}
              <div className="flex items-center gap-3 mb-5">
                <h3 className="font-sans font-medium text-sm text-[#000000] tracking-tight">
                  {group.label}
                </h3>
                <div className="flex-1 h-px bg-[#EEEEEE]" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {group.skills.map((skill, idx) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex items-center gap-3 px-4 py-3.5
                                 bg-[#FAFAFA] border border-[#EBEBEB] rounded-xl
                                 hover:bg-white hover:border-[#D0D0D0]
                                 transition-all duration-300 cursor-default select-none"
                    >
                      {/* Icon */}
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E8E8]
                                      flex items-center justify-center shrink-0
                                      text-[#555555] group-hover:text-[#111111]
                                      group-hover:border-[#D0D0D0]
                                      transition-all duration-300">
                        <IconComponent size={15} />
                      </div>

                      {/* Name */}
                      <span className="font-sans font-medium text-[13px] text-[#333333]
                                       group-hover:text-[#111111]
                                       transition-colors duration-300 tracking-tight leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
