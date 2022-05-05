import { ButtonProps } from './Button.types';

export const ButtonView = ({ isLoading, children }: ButtonProps) => {
  return (
    <button className="bg-gray-400 p-4 outline-none border-none">
      {isLoading ? 'carregando...' : children}
    </button>
  );
};
