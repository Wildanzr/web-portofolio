import { Form, Input, message } from 'antd'
import emailjs from '@emailjs/browser'

const { Item } = Form
const { TextArea } = Input

export default function Email () {
  // Local states
  const USER_ID = process.env.NEXT_PUBLIC_USER_ID || ''
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || ''
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || ''

  // Use Form
  const [form] = Form.useForm()

  // Handle Submit
  const handleSubmit = (values: any) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
      to_name: 'Wildan',
      reply_to: values.email
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((res) => {
        message.success('Email sent successfully!', 5)
      })
      .catch((err) => {
        message.error('Email failed to send!')
        console.log(err)
      })

    form.resetFields()
  }

  return (
    <div className="w-full lg:w-8/12 flex flex-col items-start justify-start">
      <div className="w-full flex flex-col items-center justify-center">
        <Form
          name="send-email"
          form={form}
          onFinish={handleSubmit}
          className="w-full flex flex-col"
        >
          <div className="w-full flex flex-col">
            <Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!'
                },
                {
                  type: 'email',
                  message: 'Please input a valid email!'
                }
              ]}
              className="w-full"
            >
              <Input placeholder="Your Email" className="w-full" />
            </Item>

            <Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!'
                }
              ]}
              className="w-full"
            >
              <TextArea
                placeholder="Your Name"
                className="w-full"
                autoSize={{ minRows: 1, maxRows: 2 }}
              />
            </Item>

            <Item
              name="message"
              rules={[
                {
                  required: true,
                  message: 'Please input your message!'
                }
              ]}
              className="w-full"
            >
              <TextArea
                placeholder="What can I do for you?"
                className="w-full"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Item>

            <Item className="w-full">
              <button
                className="w-full flex flex-row btn border-0 space-x-3 items-center justify-center px-3 py-2 text-snow rounded-md bg-main dark:bg-blue-400"
                type="submit"
              >
                <span className="text-lg font-medium">Send</span>
              </button>
            </Item>
          </div>
        </Form>
      </div>
    </div>
  )
}
