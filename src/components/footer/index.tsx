import { skeleton } from '../../utils';

const Footer = ({
  content,
  loading,
}: {
  content: string | null;
  loading: boolean;
}) => {
  if (!content) return null;

  return (
    <div className="card-body">
      {loading ? (
        skeleton({ widthCls: 'w-52', heightCls: 'h-6' })
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

export default Footer;
