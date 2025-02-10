import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Loading: React.FC = () => (
	<div className="absolute w-[100vw] h-[100vh] top-0 bg-[#ffffff91] backdrop-filter backdrop-blur-sm flex items-center justify-center">
		<Flex align="center" gap="middle">
			<Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
		</Flex>
	</div>
);

export default Loading;