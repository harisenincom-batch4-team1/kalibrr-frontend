import { useState } from "react";
import { Button, Card, Label, Spinner, TextInput } from "flowbite-react";

const CardChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card className="max-w-[800px] mx-auto rounded-lg overflow-hidden border-[1px] hover:shadow">
      <h1 className={"text-white font-semibold text-lg py-3 px-4 bg-blue-600"}>
        Ubah Password
      </h1>
      <div className="bg-white px-4 md:flex gap-5">
        <form className="space-y-3 pb-5 md:mt-0 w-full">
          <p className="font-normal md:font-medium border-b-[1px] py-4">
            Untuk mengubah kata sandi anda, mohon lengkapi data berikut.
          </p>
          <div className="w-full pb-4 space-y-2 border-b-[1px]">
            <div className="border-b-[1px] pb-5">
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Password sekarang" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required={true}
                autoComplete="off"
                disabled={isLoading}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Password baru" />
              </div>
              <TextInput
                id="password2"
                type="password"
                required={true}
                autoComplete="off"
                disabled={isLoading}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password3" value="Konfirmasi password baru" />
              </div>
              <TextInput
                id="password3"
                type="password"
                required={true}
                autoComplete="off"
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="w-full flex">
            <Button
              type="submit"
              outline={isLoading}
              disabled={isLoading}
              className="ml-auto bg-blue-600 hover:bg-blue-500"
            >
              {isLoading ? (
                <Spinner color="info" className="mx-3" />
              ) : (
                <span>Simpan</span>
              )}
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default CardChangePassword;
