export interface EmailAttributes {
  subject: string,
  senderName: string,
  senderEmail: string,
  text: string,
}

interface FormAttributes {
  name: string
  value: string
}

type EventFormChildren = Array<FormAttributes>;

export interface EventTargetForm extends EventTarget {
  children: EventFormChildren
}
