interface ReviewField {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: any) => any;
  initialValue?: () => string;
}

interface ReviewSchema {
  name: string;
  title: string;
  type: string;
  fields: ReviewField[];
}

const review: ReviewSchema = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5)
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
  ],
};

export default review;
