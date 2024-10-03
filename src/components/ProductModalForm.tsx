import { Product, sendFormData } from "@/lib/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import LoadingSpinner from "./LoadingSpinner";

export interface FormData {
  name: string;
  email: string;
  phone_number: string;
  street_number: string;
  street: string;
  district: string;
  city: string;
  state: string;
}

export default function ProductModalForm({
  product,
  onSuccess,
}: {
  product: Product;
  onSuccess: () => void;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(data: FormData) {
    if (loading) return;

    setLoading(true);
    const response = await sendFormData({
      ...data,
      product_id: product.product_id,
    });

    if (response.executed) {
      onSuccess();
      reset();
    }
    setLoading(false);
  }

  const applyPhoneMask = (value: string) => {
    value = value.replace(/\D/g, "");

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})/, "($1");
    }

    return value;
  };

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const maskedValue = applyPhoneMask(event.target.value);
    if (!maskedValue) return;
    setValue("phone_number", maskedValue);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col">
      <h2 className="text-2xl mb-2">Dados do comprador</h2>
      <Input
        {...register("name", { required: "Campo obrigatório" })}
        label="Nome"
        placeholder="Digite seu nome"
        error={errors.name}
      />

      <Input
        {...register("email", {
          required: "Campo obrigatório",
          pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" },
        })}
        label="Email"
        placeholder="Digite seu email"
        error={errors.email}
      />

      <Input
        {...register("phone_number", {
          required: "Campo obrigatório",
          onChange: handlePhoneChange,
        })}
        label="Telefone"
        placeholder="(99) 99999-9999"
        error={errors.phone_number}
      />

      <hr className="my-4" />

      <h3 className="text-2xl mb-2">Endereço de entrega</h3>

      <Input
        {...register("street", { required: "Campo obrigatório" })}
        label="Rua"
        placeholder="Digite a rua"
        error={errors.street}
      />

      <Input
        {...register("street_number", {
          required: "Campo obrigatório",
          pattern: { value: /^[0-9]+$/, message: "Digite apenas números" },
        })}
        label="Número"
        placeholder="Digite o número"
        error={errors.street_number}
        type="number"
      />

      <Input
        {...register("district", { required: "Campo obrigatório" })}
        label="Bairro"
        placeholder="Digite o bairro"
        error={errors.district}
      />

      <Input
        {...register("city", { required: "Campo obrigatório" })}
        label="Cidade"
        placeholder="Digite a cidade"
        error={errors.city}
      />

      <Input
        {...register("state", { required: "Campo obrigatório" })}
        label="Estado"
        placeholder="Digite o estado"
        error={errors.state}
      />

      <Button
        type="submit"
        className="mt-4 flex items-center justify-center"
        disabled={loading}
      >
        Confirmar compra {loading ? <LoadingSpinner className="ml-2" /> : null}
      </Button>
    </form>
  );
}
