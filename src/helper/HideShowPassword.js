import { TextInput } from 'flowbite-react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const HideShowPassword = () => {
  const [isHidden, setIsHidden] = useState(true);
  const togglePasswordVisibility = () => {
    setIsHidden(prevState => !prevState);
  };
  return (
    <div className="flex flex-row relative items-center">
        <div className="basis-full">
            <TextInput
                id="password"
                type={isHidden ? "password" : "text"}
                placeholder="Kata Sandi"
                required={true}
            />
        </div>
        <div className="absolute right-5 opacity-50 cursor-pointer">
          {isHidden ? (
              <FaEyeSlash size={25} onClick={togglePasswordVisibility} />
          ) : (
              <FaEye size={25} onClick={togglePasswordVisibility} />
          )}
        </div>
    </div>
  )
}

export default HideShowPassword;
