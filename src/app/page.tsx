import { Button } from "@nextui-org/react"

import { ThemeSwitcher } from "@components/ThemeSwitcher"

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <ThemeSwitcher />
      <h1 className="mt-4">Hello, world!</h1>
      <p className="text-lg">Next.js 14 + Next-UI boilerplate to change between themes</p>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-center">Example solid buttons</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button variant="solid" color="default">
            Default
          </Button>
          <Button variant="solid" color="primary">
            Primary
          </Button>
          <Button variant="solid" color="secondary">
            Secondary
          </Button>
          <Button variant="solid" color="success">
            Success
          </Button>
          <Button variant="solid" color="warning">
            Warning
          </Button>
          <Button variant="solid" color="danger">
            Error
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-center">Example faded buttons</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button variant="faded" color="default">
            Default
          </Button>
          <Button variant="faded" color="primary">
            Primary
          </Button>
          <Button variant="faded" color="secondary">
            Secondary
          </Button>
          <Button variant="faded" color="success">
            Success
          </Button>
          <Button variant="faded" color="warning">
            Warning
          </Button>
          <Button variant="faded" color="danger">
            Error
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-center">Example bordered buttons</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button variant="bordered" color="default">
            Default
          </Button>
          <Button variant="bordered" color="primary">
            Primary
          </Button>
          <Button variant="bordered" color="secondary">
            Secondary
          </Button>
          <Button variant="bordered" color="success">
            Success
          </Button>
          <Button variant="bordered" color="warning">
            Warning
          </Button>
          <Button variant="bordered" color="danger">
            Error
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-center">Example light buttons</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button variant="light" color="default">
            Default
          </Button>
          <Button variant="light" color="primary">
            Primary
          </Button>
          <Button variant="light" color="secondary">
            Secondary
          </Button>
          <Button variant="light" color="success">
            Success
          </Button>
          <Button variant="light" color="warning">
            Warning
          </Button>
          <Button variant="light" color="danger">
            Error
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-center">Example flat buttons</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button variant="flat" color="default">
            Default
          </Button>
          <Button variant="flat" color="primary">
            Primary
          </Button>
          <Button variant="flat" color="secondary">
            Secondary
          </Button>
          <Button variant="flat" color="success">
            Success
          </Button>
          <Button variant="flat" color="warning">
            Warning
          </Button>
          <Button variant="flat" color="danger">
            Error
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-center">Example ghost buttons</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button variant="ghost" color="default">
            Default
          </Button>
          <Button variant="ghost" color="primary">
            Primary
          </Button>
          <Button variant="ghost" color="secondary">
            Secondary
          </Button>
          <Button variant="ghost" color="success">
            Success
          </Button>
          <Button variant="ghost" color="warning">
            Warning
          </Button>
          <Button variant="ghost" color="danger">
            Error
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-center">Example shadow buttons</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button variant="shadow" color="default">
            Default
          </Button>
          <Button variant="shadow" color="primary">
            Primary
          </Button>
          <Button variant="shadow" color="secondary">
            Secondary
          </Button>
          <Button variant="shadow" color="success">
            Success
          </Button>
          <Button variant="shadow" color="warning">
            Warning
          </Button>
          <Button variant="shadow" color="danger">
            Error
          </Button>
        </div>
      </div>

      <span className="mt-8 text-gray-800 dark:text-gray-200">
        Made with 🤍 by <a href="https://github.com/jalvarezz13">jalvarezz13</a>
      </span>
    </div>
  )
}
