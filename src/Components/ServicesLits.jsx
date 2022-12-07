import { FaLock, FaLeaf, FaCheck, FaTools } from 'react-icons/fa';
export const serviceFor = {
  security: 'Security',
  secIcon: <FaLock className='text-2xl text-[#f0b547]' />,
  securityDtls:
    'Implemets a code architecture that provides a strong and imbeded security that prevents leaks and data loss. Securing the websites confidential data and properties that serves as a building block of strong user trust.',
  maintainability: 'Maintainability',
  mainIcon: <FaTools className='text-2xl text-[#f0b547]' />,
  maintainabilityDtls:
    'Develops a design based on conventional way to ensure a clean and less to no maintenance. Keep code understandabilty and extensibility for for future developers, updates and maintenance.',
  design: 'Design',
  desIcon: <FaLeaf className='text-2xl text-[#f0b547]' />,
  designDtls:
    'Develops a clean and minimal design for clients. Performs a careful consideration of color scheme usage, clean layout, fonts and typographys that provides positive impression to the users.',
  quality: 'Quality',
  qualityIcon: <FaCheck className='text-2xl text-[#f0b547]' />,
  qualityDtls:
    'Firs impression lasts. Your website serves as the first contact with your client/customers before they see your products/services making the reason why it is necessary to showcase website quality.',
};

export default serviceFor;
