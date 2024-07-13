import React, { useState } from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormGetValues } from 'react-hook-form';
import { uploadImageToCloudinary } from '../../../../src/api';
type Props = { 
  name: string; 
  label: string;
  placeholder: string; 
  register: UseFormRegister<any>;
  errors: FieldErrors; 
  setValue: UseFormSetValue<any>; 
  getValues: UseFormGetValues<any>; 
};

const Upload = ({ name, label, placeholder, register, errors, setValue, getValues }: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      try {
        const url = await uploadImageToCloudinary(file);
        setImageUrl(url);
        setValue(name, url); // Set the uploaded image URL in the form
      } catch (error) {
        console.error('Error uploading image:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <label className='text-sm text-white mb-2' htmlFor={name}>
        {label}
      </label>
      <input
        type='file'
        accept='image/*'
        className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
        onChange={handleImageUpload}
      />
      {loading && <p className='text-sm text-blue-500 mt-2'>Uploading...</p>}
      {imageUrl && (
        <img src={imageUrl} alt='Uploaded profile' className='mt-4 w-32 h-32 object-cover rounded-full' />
      )}
      {errors[name] && (
        //@ts-ignore
        <p className='text-red-500 text-xs mt-1'>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default Upload;
