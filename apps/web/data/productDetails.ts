import { acDrives } from "./products/ac-drives";
import { servoDrivesMotors } from "./products/servo-drives-motors";
import { goldenAgeProducts } from "./products/golden-age";
import { plcProducts } from "./products/plc";
import { motionControllers } from "./products/motion-controllers";
import { weintekHmiProducts } from "./products/weintek-hmi";
import { iiotProducts } from "./products/iiot-products";
import { visionSystemProducts } from "./products/vision-system";
import { industrialRobots } from "./products/industrial-robots";

export type {
  IndividualProduct,
  ProductSpecTable
} from "./products/types";

export const individualProductsData = [
  ...acDrives,
  ...servoDrivesMotors,
  ...goldenAgeProducts,
  ...plcProducts,
  ...motionControllers,
  ...weintekHmiProducts,
  ...iiotProducts,
  ...visionSystemProducts,
  ...industrialRobots,
];

export const getProductsByCategory = (categorySlug: string) => {
  return individualProductsData.filter(product => {
    if (Array.isArray(product.categorySlug)) {
      return product.categorySlug.includes(categorySlug);
    }
    return product.categorySlug === categorySlug;
  });
};

export const getProduct = (categorySlug: string, productSlug: string) => {
  return individualProductsData.find(product => {
    const matchCategory = Array.isArray(product.categorySlug)
      ? product.categorySlug.includes(categorySlug)
      : product.categorySlug === categorySlug;
    return matchCategory && product.slug === productSlug;
  });
};
