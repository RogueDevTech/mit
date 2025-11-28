"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "backOut" },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#00BC7D",
    color: "#000",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95 },
};

const buttonDefaultVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "backOut" },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#FFFFFF00",
    color: "#FFFFFF",
    borderColor: "#FFFFFF33",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95 },
};

const imageVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const gradientVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <motion.div variants={imageVariants} className="absolute inset-0">
          <Image
            src="/Mit.webp"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={gradientVariants}
          className="absolute inset-0 z-10
             bg-linear-to-b
             from-[rgba(0,0,0,0.8)]
             via-[rgba(0,0,0,0.9)]
             to-black"
        />
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute top-8 left-8 z-20"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/mit-logo.png"
            alt="MIT Logo"
            width={65}
            height={65}
            className="object-contain w-12 h-12 sm:w-14 sm:h-14 lg:w-[65px] lg:h-[65px]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className=" font-[Inter] text-[16.32px] hidden lg:flex text-white font-bold tracking-[0.07px] leading-[32.33px]"
        >
          Men in Tech
        </motion.p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-white lg:text-[110.91px] text-[40px] tracking-[-0.5px] font-[Inter] 
          lg:tracking-[-2.77px] font-semibold leading-12 lg:leading-[120px] max-w-full lg:max-w-[900px]"
        >
          <span className="lg:hidden">
            Empowering
            <br />
            Men to Lead,
            <br />
            Innovate, and
            <br />
            Thrive
          </span>
          <span className="hidden lg:inline">
            Empowering Men to Lead, Innovate, and Thrive
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-white/60 mt-6 lg:max-w-[763px] text-[18px] font-[Inter] 
          lg:text-[20px] leading-6 lg:leading-[27.73px] tracking-[0.05px] max-w-full"
        >
          {/* <span className="lg:hidden">
            We are aglobal nonprofit
            <br />
            dedicated to suppporting, empowering, and advancing men
            <br />
            in the technology ecosystme
          </span> */}
          <span className="lg:hidden">
            We are a global nonprofit dedicated to
            <br />
            supporting, empowering, and advancing
            <br />
            men in the technology ecosystem.
          </span>
          <span className="hidden lg:inline">
            We are a global nonprofit organization dedicated to supporting ,
            empowering, and advancing men in the technology ecosystem.
          </span>
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-12 lg:mt-14 w-full max-w-full  lg:max-w-none justify-center items-center"
        >
          <motion.a
            href="https://menintech.slack.com/join/shared_invite/zt-3jleqexhu-mzfJaOhBXiZe~tx1KFnIQg#/shared-invite/email"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <motion.button
              variants={buttonDefaultVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="group flex w-full items-center justify-center gap-1.5 
              px-6 py-4 lg:py-3 text-[16px] lg:text-[14px] leading-[20.8px] tracking-[-0.27px] 
              rounded-full text-[#000000] border border-[#00BC7D] bg-[#00BC7D] sm:w-52"
            >
              Join the Community
              <motion.div
                whileHover={{ x: 3, rotate: 45 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src="/Container.png"
                  alt="icon"
                  width={17}
                  height={17}
                  className="object-contain transition-all duration-300 group-hover:invert"
                />
              </motion.div>
            </motion.button>
          </motion.a>

          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="group w-full sm:w-[183px] flex items-center justify-center px-6 py-4 
            lg:py-3 text-[16px] lg:text-[14px] leading-[20.8px] tracking-[-0.27px] rounded-full 
            text-white border border-white/20 bg-transparent"
          >
            <span className="lg:hidden">Partner With Us</span>
            <span className="hidden lg:inline">Become a Partner</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
