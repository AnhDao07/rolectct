import React from 'react';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12 space-y-12 text-center"
    >
      <section className="space-y-6">
        <h2 className="madman-text text-horror-red">Grim Origins</h2>
        <div className="narrative-frame">
          <p className="text-xl leading-relaxed text-gray-300 text-left md:text-justify mb-4">
            Người chơi sẽ vào vai những người mất ký ức, tỉnh dậy trong một nhà tang lễ bỏ hoang. Để sống sót, họ phải tuân thủ các quy tắc, khám phá từng khu vực, thu thập những mảnh ký ức thất lạc và tìm ra sự thật đằng sau nơi quỷ dị này.
          </p>
          <p className="text-xl leading-relaxed text-gray-300 text-left md:text-justify">
            Trong quá trình đó, họ có thể lựa chọn hợp tác với nhau để sinh tồn hoặc hành động độc lập, tự mình đối mặt với những hiểm nguy trong bóng tối. Đồng thời, bốn NPC bí ẩn sẽ xuất hiện, mỗi người nắm giữ một phần sự thật, nhưng không phải ai cũng đáng tin.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="madman-text text-horror-red">Cục cưng đã sẵn sàng chưa?</h2>
        <p className="text-lg leading-relaxed text-gray-400 italic">
          "Có những bí mật bị chôn vùi là có lý do. Và cũng có những bí mật… sẽ chôn vùi chính bạn."
        </p>
      </section>

      <div className="py-24">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-horror-red to-transparent opacity-50" />
      </div>
    </motion.div>
  );
};

export default Home;
