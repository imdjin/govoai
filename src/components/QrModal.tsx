import { X } from "lucide-react";
import wechatQr from "@/assets/wechat-qr.png";

interface QrModalProps {
  open: boolean;
  onClose: () => void;
}

const QrModal = ({ open, onClose }: QrModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Panel */}
      <div
        className="relative bg-white rounded-xl flex flex-col items-center justify-center z-10"
        style={{ width: 350, height: 350 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <img src={wechatQr} alt="微信二维码" className="w-44 h-44 object-contain" />
        <p className="text-sm text-gray-600 mt-4 text-center">请微信扫描联系我们。<br />添加时请备注"秒懂政务"，感谢您的配合～</p>
      </div>
    </div>
  );
};

export default QrModal;
