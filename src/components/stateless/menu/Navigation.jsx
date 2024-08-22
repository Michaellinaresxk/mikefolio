import { motion } from "framer-motion";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { photo1 } from "@/assets/img/index";
import {
  variants_menu_items,
  variants_navigation,
} from "../../../config/motion"; // Asegúrate de que esta ruta esté correcta

const Navigation = () => (
  <motion.ul
    variants={variants_navigation}
    className="p-6 absolute top-20 right-24 w-[230px] z-50"
  >
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
    <motion.div variants={variants_menu_items}>
      <Image
        src={photo1}
        alt="Profile Photo"
        width={180}
        height={180}
        className="rounded-full mt-20 border border-transparent"
      />
    </motion.div>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3];

export default Navigation;
